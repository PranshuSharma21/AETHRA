# AETHRA
<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:0a0a0a,100:18181b&height=220&section=header&text=AETHRA&fontSize=76&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Earth%20Observation%20%26%20Predictive%20Environmental%20Intelligence&descAlignY=62&descSize=18&descColor=a1a1aa" width="100%" alt="AETHRA Header Banner" /><a href="https://www.google.com/search?q=https://pranshusharma21.github.io/AETHRA/">
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=18&duration=3200&pause=900&color=F8F9FA&background=00000000&center=true&vCenter=true&width=780&lines=Multi+Sensor+NASA+Satellite+Fusion+Engine;Click+Any+Point+On+Earth+For+Live+Telemetry;Isolation+Forest+Anomalies+%2B+Logistic+Risk+Scoring;30+Day+Holt+Exponential+Smoothing+Forecasts;Powered+By+FastAPI+%2B+Scikit+Learn+%2B+Groq+LLM" alt="Typing Animation" />
</a>Live Web Platform
Geospatial Console
Cloud ML Engine
</div>OverviewAETHRA is an AI powered Earth observation and environmental intelligence platform developed by a five member engineering team from Vivekananda Institute of Professional Studies (VIPS) for the NASA Space Apps Challenge.Satellites collect massive daily measurements of surface heat, rainfall, root zone soil moisture, vegetation greenness, and underground water mass through NASA Earthdata. However, traditional monitoring tools typically examine a single variable in isolation. AETHRA connects eight satellite datasets into a minimalist pitch black and off white web interface paired with a live Python machine learning microservice hosted on Render. Users can click any coordinate on Earth to fetch real daily satellite records and inspect three separate scientific outputs:Observed Statistical Anomaly ($\sigma$): Measures how unusual current surface conditions are compared to a thirty year baseline using Scikit Learn IsolationForest and standard deviation scoring.Estimated Environmental Risk Score (0 to 100): Combines thermal stress, soil moisture deficit, gravimetric water loss, and active fire detections through a calibrated multi variable logistic fusion model.Thirty Day Temperature Forecast ($\Delta^\circ\text{C}$): Projects short term surface temperature trajectories using Holt double exponential smoothing autoregression over live NASA POWER time series.Interactive System Architectureflowchart LR
    subgraph NASA["NASA Open Satellite Portals"]
        A1["NASA POWER API\nDaily T2M, Precip, RH2M, Solar"]
        A2["NASA GIBS & Worldview\nMODIS LST, TrueColor, NDVI Tiles"]
        A3["SMAP • GRACE FO • FIRMS • NISAR\nSoil Moisture, Water Mass, Fires, SAR"]
    end

    subgraph FRONTEND["GitHub Pages Frontend (Minimalist Black & Off White UI)"]
        B1["Interactive Leaflet Globe\nClick Any Point on Earth"]
        B2["Right Hand Inspector Panel\nAnomaly, Risk & 30d Forecast Cards"]
        B3["Expandable Geek Filters Drawer\nWhat If Sliders • SHAP • Raster Split"]
        B4["Canva Style Export Menu\n.JPG Snapshot • .XLSX • .MD"]
    end

    subgraph BACKEND["Render Cloud Python 3.11 Backend (ml_engine.py)"]
        C1["POST /analyze-point\nIsolationForest + Holt 30d Engine"]
        C2["POST /api/chat\nGroq SDK (Llama 3.3 70B & Qwen 32B)"]
        C3["GET /health\nLive Telemetry & Model Status"]
    end

    A1 & A2 & A3 --> B1
    A1 --> C1
    B1 <--> C1
    B3 <--> C2
    B1 --> B2 --> B4
Core Platform Capabilities<details open>
<summary><b>1. Click Any Coordinate on Earth (Live Satellite Point Retrieval)</b></summary>
Clicking anywhere on the central Leaflet satellite globe drops an interactive target marker, reverse geocodes the place name, and queries a thirty day window of daily observations (T2M surface temperature, PRECTOTCORR precipitation, RH2M relative humidity, and ALLSKY_SFC_SW_DWN solar flux) from the live NASA POWER API alongside our Render Python /analyze-point microservice.</details><details>
<summary><b>2. Multi Layer NASA GIBS Satellite Tile Switcher</b></summary>
Switch seamlessly across four real time satellite raster layers streamed from NASA Worldview and the NASA GIBS API over Esri World Imagery:Surface Temp: MODIS_Terra_Land_Surface_Temp_Day thermal anomaly layer.True Color: MODIS_Terra_CorrectedReflectance_TrueColor daily optical imagery.Vegetation: MODIS_Terra_NDVI_8Day canopy vigor index.Base Map: High resolution satellite imagery with hotspot pins.</details><details>
<summary><b>3. Collapsible "Advanced Filters" Drawer for Researchers & Geeks</b></summary>
To keep the main dashboard clean and human friendly, complex scientific tools are tucked inside the Advanced Filters ▾ drawer, which smoothly auto pans into view when opened:Four Parameter What If Scenario Simulator: Perturb Temperature ($\Delta\text{LST}$ from -2.0°C to +5.0°C), Precipitation (-60% to +60%), Soil Moisture (-50% to +50%), and Vegetation (-40% to +30%) to watch risk scores and SHAP weights update live.Historical Trend & Thirty Day Projection Chart: Plots 2020 through 2026 observations against the thirty year baseline and the thirty day Holt forecast using Chart.js.Model Driver Weights (SHAP Attribution): Displays exact percentage contributions of Surface Temperature, Soil Moisture, Canopy Vegetation, Groundwater Storage, and Active Fires.Before and After Satellite Raster Split Canvas: Interactive split slider comparing 2020 baseline terrain against 2026 observed conditions with a toggleable AI attention heatmap overlay.Ask AETHRA AI Assistant: Powered by the official GroqCloud Python SDK (llama-3.3-70b-versatile and qwen/qwen3-32b) on Render plus an in browser multi station comparative ranking engine.</details><details>
<summary><b>4. Canva Style Multi Format Export Menu (.JPG, .XLSX, .MD)</b></summary>
Located in the top right corner of the dashboard toolbar, the Export ▾ menu generates three instant deliverables for any selected hotspot or custom clicked coordinate:Area Snapshot Image (.JPG): High resolution 1200x675 visual summary card rendered on HTML5 Canvas with target map preview, coordinates, anomaly/risk/forecast callouts, sensor bar, and plain English summary.Telemetry Spreadsheet (.XLSX): Multi sheet Excel workbook (Area Summary and Historical Trends) generated client side via SheetJS.Structured Briefing (.MD): Clean Markdown environmental report citing all active NASA data feeds.</details>Global Benchmark Hotspots & Telemetry MatrixStation / RegionCoordinatesPrimary Environmental HazardObserved AnomalyComposite Risk Score30 Day Temp ShiftSurface TempSoil MoistureGRACE Water StorageActive FiresManaus, Brazil-3.1019°, -60.0250°Canopy Moisture Stress & Active Fires+3.12σ91.2 / 100+1.78°C34.9°C24.5%-19.2 cm486Svalbard, Norway78.2233°, 15.6469°Polar Warming, Ice Loss & Permafrost Thaw+3.45σ88.7 / 100+2.15°C4.8°C41.0%-26.5 cm4New Delhi, India28.6358°, 77.2245°Groundwater Depletion & Thermal Stress+2.84σ86.4 / 100+1.45°C36.8°C18.2%-14.8 cm142Nairobi, Kenya-1.2833°, 36.8167°Rainfall Deficit & Rangeland Decline+2.68σ82.1 / 100+1.34°C31.2°C16.7%-11.6 cm118Central Valley, USA36.7477°, -119.7724°Aquifer Subsidence & Crop Stress+2.41σ79.5 / 100+1.22°C33.4°C15.9%-22.4 cm94Mathematical & Machine Learning Formulationflowchart TD
    S["30 Day NASA POWER Time Series\nT2M • PRECTOTCORR • RH2M • ALLSKY_SFC_SW_DWN"] --> M1["1. Anomaly Detection\nScikit Learn IsolationForest + Z Score"]
    S --> M2["2. Composite Risk Index\nCalibrated Multi Variable Logistic Sigmoid"]
    S --> M3["3. 30 Day Trajectory\nHolt Double Exponential Smoothing"]
    M1 & M2 & M3 --> XAI["TreeSHAP Driver Weights & Grad CAM Raster Attention"]
Isolation Forest & Empirical Z Score Anomaly:
$$Z_{\text{obs}} = \text{clip}\left(\frac{\vert{}T_{\text{latest}} - \mu_T\vert{}}{\sigma_T} + 1.2 \cdot s_{\text{iso}}(T_{\text{latest}}),\; 0.25,\; 4.20\right)$$Multi Variable Logistic Risk Fusion (0 to 100):
$$\text{Risk} = \frac{100}{1 + \exp\big(-(-1.1 + 0.55 Z_{\text{obs}} + 0.04 \max(0, 30 - M_{\text{soil}}) + 0.03 \max(0, T_{\text{latest}} - 25))\big)}$$Holt Linear Exponential Smoothing (30 Day Projection):
$$\ell_t = \alpha y_t + (1 - \alpha)(\ell_{t-1} + b_{t-1}), \qquad b_t = \beta(\ell_t - \ell_{t-1}) + (1 - \beta)b_{t-1}, \qquad \hat{\Delta}_{30\text{d}} = h \cdot b_t$$NASA Missions & Open Data Portals IntegratedMission / PortalParameters RetrievedOfficial Resource URLNASA Earthdata PortalMulti sensor Earth observation collections and cataloghttps://www.earthdata.nasa.gov/NASA POWER Project APILive daily solar irradiance, T2M temperature, humidity, and rainfallhttps://power.larc.nasa.gov/NASA Worldview & GIBSDaily satellite WMTS raster tiles for LST, True Color, and NDVIhttps://worldview.earthdata.nasa.gov/NASA GIBS Developer APIOGC Web Map Tile Service endpoints (EPSG:3857)https://www.earthdata.nasa.gov/engage/open-data-services-software/earthdata-developer-portal/gibs-apiNASA FIRMS (MODIS & VIIRS)Near real time active fire hotspots (375m and 1km)https://firms.modaps.eosdis.nasa.gov/NASA SMAP MissionSurface and root zone soil moisture percentagehttps://www.earthdata.nasa.gov/data/platforms/space-based-platforms/smapNASA GRACE & GRACE FOGravimetric terrestrial water storage and cryospheric mass anomalieshttps://gracefo.jpl.nasa.gov/data/grace-fo-data/NASA MODIS & LandsatLand surface temperature and canopy spectral reflectancehttps://science.nasa.gov/mission/landsat/NASA ISRO NISAR & ASF DAACDual band Synthetic Aperture Radar ground deformation and subsidencehttps://www.earthdata.nasa.gov/data/platforms/space-based-platforms/nisarRepository Structure (Root Level Architecture)File NameRole in AETHRAHosting Targetindex.htmlMinimalist black and off white Home page with orbital Earth hero, plain English overview, and station chartGitHub Pagesdashboard.htmlMain interactive satellite map console, Recommended Hotspots bar, right hand inspector, and Geek Filters drawerGitHub Pagessource.htmlDedicated directory of all integrated NASA satellite missions and open data portalsGitHub Pagesabout.htmlSelf contained VIPS team showcase with cursor tracking spotlight cards and LinkedIn linksGitHub Pagescontact.htmlStandalone feedback and regional coordinate request pageGitHub Pagesdashboard.cssMinimalist pitch black (#000000) and off white (#f8f9fa) stylesheet with smooth button underline animationsGitHub Pagesdashboard.jsFrontend state engine, live NASA POWER point fetcher, Holt 30d forecaster, and .JPG/.XLSX/.MD exportersGitHub Pagesml_engine.pyUnified Python FastAPI service running IsolationForest, Holt 30d forecasting, and GroqCloud LLM chatRender Cloudrequirements.txtPython package dependencies (fastapi, uvicorn, numpy, pydantic, scikit-learn, groq)Render Cloudruntime.txtPins python-3.11.10 on Render for fast prebuilt wheel installationRender CloudCloud API Endpoints (https://aethra-ml-backend.onrender.com)<details>
<summary><b>GET <code>/health</code> — Service & Model Health Check</b></summary>
{
  "status": "online",
  "project": "AETHRA",
  "team": "Verdant Void",
  "groq_configured": true,
  "models": [
    "IsolationForest",
    "LogisticRiskFusion",
    "HoltLinear30d",
    "Groq-SDK"
  ]
}
</details><details>
<summary><b>POST <code>/analyze-point</code> — Live Coordinate NASA POWER + IsolationForest Inference</b></summary>
Request Body:{
  "lat": 28.6358,
  "lon": 77.2245
}
Response Body:{
  "coordinates": { "lat": 28.6358, "lon": 77.2245 },
  "observed_anomaly_z": 2.84,
  "estimated_risk_score": 86.4,
  "forecast_30d_temp_delta_c": 1.45,
  "latest_surface_temp_c": 36.8,
  "estimated_soil_moisture_pct": 18.2,
  "daily_precipitation_mm": 1.1,
  "ml_engine": "Scikit-Learn IsolationForest + Holt 30d"
}
</details><details>
<summary><b>POST <code>/api/chat</code> — Grounded Groq / Qwen Multi Station Assistant</b></summary>
Request Body:{
  "query": "Which place is worst affected according to you?",
  "activeRegion": "New Delhi & Indo Gangetic Plain",
  "telemetryContext": "Manaus (Risk 91.2, Fires 486) | Svalbard (Anomaly +3.45sigma) | New Delhi (Risk 86.4)",
  "model": "llama-3.3-70b-versatile"
}
</details>Quick Deployment GuideGitHub Pages (Frontend):Upload index.html, dashboard.html, source.html, about.html, contact.html, dashboard.css, and dashboard.js to the root of your GitHub repository.Navigate to Settings → Pages, select Deploy from a branch (main / /root), and click Save.Render Web Service (Python ML & AI Backend):Upload ml_engine.py, requirements.txt, and runtime.txt to the same repository.Create a new Python 3 Web Service on Render connected to your repository.Set Build Command to pip install -r requirements.txt and Start Command to uvicorn ml_engine:app --host 0.0.0.0 --port $PORT.Add your GROQ_API_KEY under Environment Variables and deploy.Team AETHRA • Vivekananda Institute of Professional Studies (VIPS)We are a team of five passionate technology enthusiasts from Vivekananda Institute of Professional Studies (VIPS), driven by innovation and a shared interest in space technology, AI, and machine learning.MemberRole & ResponsibilityConnectPranshu SharmaTeam Leader & Main System Developer (Cloud Architecture, FastAPI ML Pipeline & Deployment)Pranav VermaUI / UX Design Lead (Minimalist Black & White Interface, Interactive Map UX & Presentation)Karan KohliData Verification Lead (Multi Sensor NASA Dataset Calibration & Benchmark Verification)Aadya JainResearch & Fact Check Lead (Environmental Hazard Analysis & Scientific Source Attribution)Aarti KantoorDocumentation & Optimization Lead (Workflow Optimization, Technical Docs & Deliverable QA)<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:18181b,50:0a0a0a,100:000000&height=110&section=footer" width="100%" alt="AETHRA Footer Banner" /></div>
