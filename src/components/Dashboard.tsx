import MetricsCard from "./MetricsCard";
import AlertCard from "./AlertCard";
import AirQualityChart from "./AirQualityChart";
import { Droplets, Leaf, Wind, Factory, TreePine, AlertCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Live Environmental Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time monitoring of key environmental indicators powered by AI and satellite data
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MetricsCard
              title="Air Quality Index"
              value={42}
              unit="AQI"
              change={-8}
              icon={Wind}
              status="good"
              description="Excellent air quality detected"
            />
            <MetricsCard
              title="Water Quality"
              value={98}
              unit="%"
              change={2}
              icon={Droplets}
              status="good"
              description="Within safe parameters"
            />
            <MetricsCard
              title="Forest Coverage"
              value={76}
              unit="%"
              change={-3}
              icon={TreePine}
              status="warning"
              description="Slight decrease detected"
            />
            <MetricsCard
              title="Pollution Level"
              value={28}
              unit="PPM"
              change={-12}
              icon={Factory}
              status="good"
              description="Below threshold limits"
            />
            <MetricsCard
              title="Carbon Absorption"
              value={1.2}
              unit="Mt/yr"
              change={5}
              icon={Leaf}
              status="good"
              description="Increasing trend"
            />
            <MetricsCard
              title="Active Alerts"
              value={3}
              change={-2}
              icon={AlertCircle}
              status="warning"
              description="Requires attention"
            />
          </div>

          {/* Air Quality Chart */}
          <div className="mt-12">
            <AirQualityChart />
          </div>

          {/* Active Alerts Section */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">Active Alerts</h3>
              <span className="text-sm text-muted-foreground">Updated 5 minutes ago</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <AlertCard
                title="Elevated Pollution Detected"
                location="Industrial Zone, Amazon Basin"
                severity="high"
                time="2 hours ago"
                description="Satellite imagery shows increased particulate matter concentration near industrial facilities. Immediate investigation recommended."
                type="pollution"
              />
              <AlertCard
                title="Deforestation Activity"
                location="Protected Area, Congo Basin"
                severity="medium"
                time="5 hours ago"
                description="AI analysis detected clearing of approximately 12 hectares of forest cover in protected zone. Monitoring ongoing."
                type="deforestation"
              />
              <AlertCard
                title="Air Quality Fluctuation"
                location="Urban Center, Southeast Asia"
                severity="low"
                time="1 day ago"
                description="Temporary increase in ozone levels detected during peak traffic hours. Within acceptable range."
                type="air-quality"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
