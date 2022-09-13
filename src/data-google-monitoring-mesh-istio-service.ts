// https://www.terraform.io/docs/providers/google/d/monitoring_mesh_istio_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleMonitoringMeshIstioServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for the mesh in which this Istio service is defined.
                        Corresponds to the meshUid metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_mesh_istio_service#mesh_uid DataGoogleMonitoringMeshIstioService#mesh_uid}
  */
  readonly meshUid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}
  */
  readonly project?: string;
  /**
  * The name of the Istio service underlying this service. 
                        Corresponds to the destination_service_name metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_mesh_istio_service#service_name DataGoogleMonitoringMeshIstioService#service_name}
  */
  readonly serviceName: string;
  /**
  * The namespace of the Istio service underlying this service.
                        Corresponds to the destination_service_namespace metric label in Istio metrics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/monitoring_mesh_istio_service#service_namespace DataGoogleMonitoringMeshIstioService#service_namespace}
  */
  readonly serviceNamespace: string;
}
export interface DataGoogleMonitoringMeshIstioServiceTelemetry {
}

export function dataGoogleMonitoringMeshIstioServiceTelemetryToTerraform(struct?: DataGoogleMonitoringMeshIstioServiceTelemetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleMonitoringMeshIstioServiceTelemetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleMonitoringMeshIstioServiceTelemetry | undefined) {
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

export class DataGoogleMonitoringMeshIstioServiceTelemetryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference {
    return new DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/monitoring_mesh_istio_service google_monitoring_mesh_istio_service}
*/
export class DataGoogleMonitoringMeshIstioService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_mesh_istio_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/monitoring_mesh_istio_service google_monitoring_mesh_istio_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleMonitoringMeshIstioServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleMonitoringMeshIstioServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_mesh_istio_service',
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
    this._id = config.id;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace?: string; 
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace;
  }

  // telemetry - computed: true, optional: false, required: false
  private _telemetry = new DataGoogleMonitoringMeshIstioServiceTelemetryList(this, "telemetry", false);
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
      id: cdktf.stringToTerraform(this._id),
      mesh_uid: cdktf.stringToTerraform(this._meshUid),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
    };
  }
}
