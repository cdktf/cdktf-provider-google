// https://www.terraform.io/docs/providers/google/r/data_google_monitoring_cluster_istio_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleMonitoringClusterIstioServiceConfig extends cdktf.TerraformMetaArguments {
  /** The name of the Kubernetes cluster in which this Istio service is defined. 
                        Corresponds to the clusterName resource label in k8s_cluster resources. */
  readonly clusterName: string;
  /** The location of the Kubernetes cluster in which this Istio service is defined. 
                        Corresponds to the location resource label in k8s_cluster resources. */
  readonly location: string;
  readonly project?: string;
  /** The name of the Istio service underlying this service. 
                        Corresponds to the destination_service_name metric label in Istio metrics. */
  readonly serviceName: string;
  /** The namespace of the Istio service underlying this service. 
                        Corresponds to the destination_service_namespace metric label in Istio metrics. */
  readonly serviceNamespace: string;
}
export class DataGoogleMonitoringClusterIstioServiceTelemetry extends cdktf.ComplexComputedList {

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

// Resource

export class DataGoogleMonitoringClusterIstioService extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleMonitoringClusterIstioServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_cluster_istio_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._location = config.location;
    this._project = config.project;
    this._serviceName = config.serviceName;
    this._serviceNamespace = config.serviceNamespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string ) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace: string;
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace
  }

  // telemetry - computed: true, optional: false, required: false
  public telemetry(index: string) {
    return new DataGoogleMonitoringClusterIstioServiceTelemetry(this, 'telemetry', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
    };
  }
}
