// https://www.terraform.io/docs/providers/google/r/data_google_monitoring_mesh_istio_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleMonitoringMeshIstioServiceConfig extends cdktf.TerraformMetaArguments {
  /** Identifier for the mesh in which this Istio service is defined.
                        Corresponds to the meshUid metric label in Istio metrics. */
  readonly meshUid: string;
  readonly project?: string;
  /** The name of the Istio service underlying this service. 
                        Corresponds to the destination_service_name metric label in Istio metrics. */
  readonly serviceName: string;
  /** The namespace of the Istio service underlying this service.
                        Corresponds to the destination_service_namespace metric label in Istio metrics. */
  readonly serviceNamespace: string;
}
export class DataGoogleMonitoringMeshIstioServiceTelemetry extends cdktf.ComplexComputedList {

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

// Resource

export class DataGoogleMonitoringMeshIstioService extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleMonitoringMeshIstioServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_mesh_istio_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._meshUid = config.meshUid;
    this._project = config.project;
    this._serviceName = config.serviceName;
    this._serviceNamespace = config.serviceNamespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mesh_uid - computed: false, optional: false, required: true
  private _meshUid: string;
  public get meshUid() {
    return this.getStringAttribute('mesh_uid');
  }
  public set meshUid(value: string) {
    this._meshUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshUidInput() {
    return this._meshUid
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
    return new DataGoogleMonitoringMeshIstioServiceTelemetry(this, 'telemetry', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_uid: cdktf.stringToTerraform(this._meshUid),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
    };
  }
}
