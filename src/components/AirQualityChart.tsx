import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { time: "00:00", aqi: 35, pm25: 12 },
  { time: "04:00", aqi: 28, pm25: 9 },
  { time: "08:00", aqi: 45, pm25: 15 },
  { time: "12:00", aqi: 52, pm25: 18 },
  { time: "16:00", aqi: 38, pm25: 13 },
  { time: "20:00", aqi: 42, pm25: 14 },
  { time: "23:59", aqi: 35, pm25: 11 },
];

const AirQualityChart = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-card to-muted/20">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Air Quality Trends</h3>
          <p className="text-sm text-muted-foreground">24-hour monitoring data</p>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorAqi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--forest))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--forest))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPm" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--sky))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--sky))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="aqi" 
                stroke="hsl(var(--forest))" 
                fillOpacity={1} 
                fill="url(#colorAqi)"
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="pm25" 
                stroke="hsl(var(--sky))" 
                fillOpacity={1} 
                fill="url(#colorPm)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-forest" />
            <span className="text-sm text-muted-foreground">Air Quality Index</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-sky" />
            <span className="text-sm text-muted-foreground">PM2.5 Levels</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AirQualityChart;
