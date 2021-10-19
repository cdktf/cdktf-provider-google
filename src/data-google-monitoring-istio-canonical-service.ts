// https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleMonitoringIstioCanonicalServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the canonical service underlying this service.. 
                        Corresponds to the destination_service_name metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service.html#canonical_service DataGoogleMonitoringIstioCanonicalService#canonical_service}
  */
  readonly canonicalService: string;
  /**
  * The namespace of the canonical service underlying this service.
                        Corresponds to the destination_service_namespace metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service.html#canonical_service_namespace DataGoogleMonitoringIstioCanonicalService#canonical_service_namespace}
  */
  readonly canonicalServiceNamespace: string;
  /**
  * Identifier for the Istio mesh in which this canonical service is defined.
                        Corresponds to the meshUid metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service.html#mesh_uid DataGoogleMonitoringIstioCanonicalService#mesh_uid}
  */
  readonly meshUid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service.html#project DataGoogleMonitoringIstioCanonicalService#project}
  */
  readonly project?: string;
}
export class DataGoogleMonitoringIstioCanonicalServiceTelemetry extends cdktf.ComplexComputedList {

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service.html google_monitoring_istio_canonical_service}
*/
export class DataGoogleMonitoringIstioCanonicalService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_monitoring_istio_canonical_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service.html google_monitoring_istio_canonical_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleMonitoringIstioCanonicalServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleMonitoringIstioCanonicalServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_istio_canonical_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._canonicalService = config.canonicalService;
    this._canonicalServiceNamespace = config.canonicalServiceNamespace;
    this._meshUid = config.meshUid;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_service - computed: false, optional: false, required: true
  private _canonicalService?: string; 
  public get canonicalService() {
    return this.getStringAttribute('canonical_service');
  }
  public set canonicalService(value: string) {
    this._canonicalService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalServiceInput() {
    return this._canonicalService
  }

  // canonical_service_namespace - computed: false, optional: false, required: true
  private _canonicalServiceNamespace?: string; 
  public get canonicalServiceNamespace() {
    return this.getStringAttribute('canonical_service_namespace');
  }
  public set canonicalServiceNamespace(value: string) {
    this._canonicalServiceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalServiceNamespaceInput() {
    return this._canonicalServiceNamespace
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mesh_uid - computed: false, optional: false, required: true
  private _meshUid?: string; 
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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

  // telemetry - computed: true, optional: false, required: false
  public telemetry(index: string) {
    return new DataGoogleMonitoringIstioCanonicalServiceTelemetry(this, 'telemetry', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonical_service: cdktf.stringToTerraform(this._canonicalService),
      canonical_service_namespace: cdktf.stringToTerraform(this._canonicalServiceNamespace),
      mesh_uid: cdktf.stringToTerraform(this._meshUid),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
