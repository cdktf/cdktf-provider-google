// https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleMonitoringIstioCanonicalServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the canonical service underlying this service.. 
                        Corresponds to the destination_service_name metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service#canonical_service DataGoogleMonitoringIstioCanonicalService#canonical_service}
  */
  readonly canonicalService: string;
  /**
  * The namespace of the canonical service underlying this service.
                        Corresponds to the destination_service_namespace metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service#canonical_service_namespace DataGoogleMonitoringIstioCanonicalService#canonical_service_namespace}
  */
  readonly canonicalServiceNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for the Istio mesh in which this canonical service is defined.
                        Corresponds to the meshUid metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service#mesh_uid DataGoogleMonitoringIstioCanonicalService#mesh_uid}
  */
  readonly meshUid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}
  */
  readonly project?: string;
}
export interface DataGoogleMonitoringIstioCanonicalServiceTelemetry {
}

export function dataGoogleMonitoringIstioCanonicalServiceTelemetryToTerraform(struct?: DataGoogleMonitoringIstioCanonicalServiceTelemetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleMonitoringIstioCanonicalServiceTelemetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleMonitoringIstioCanonicalServiceTelemetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

export class DataGoogleMonitoringIstioCanonicalServiceTelemetryList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference {
    return new DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service google_monitoring_istio_canonical_service}
*/
export class DataGoogleMonitoringIstioCanonicalService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_istio_canonical_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/monitoring_istio_canonical_service google_monitoring_istio_canonical_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleMonitoringIstioCanonicalServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleMonitoringIstioCanonicalServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_istio_canonical_service',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canonicalService = config.canonicalService;
    this._canonicalServiceNamespace = config.canonicalServiceNamespace;
    this._id = config.id;
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
    return this._canonicalService;
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
    return this._canonicalServiceNamespace;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._meshUid;
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
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // telemetry - computed: true, optional: false, required: false
  private _telemetry = new DataGoogleMonitoringIstioCanonicalServiceTelemetryList(this, "telemetry", false);
  public get telemetry() {
    return this._telemetry;
  }

  // user_labels - computed: true, optional: false, required: false
  private _userLabels = new cdktf.StringMap(this, "user_labels");
  public get userLabels() {
    return this._userLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonical_service: cdktf.stringToTerraform(this._canonicalService),
      canonical_service_namespace: cdktf.stringToTerraform(this._canonicalServiceNamespace),
      id: cdktf.stringToTerraform(this._id),
      mesh_uid: cdktf.stringToTerraform(this._meshUid),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
