// https://www.terraform.io/docs/providers/google/d/cloud_run_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudRunServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of the cloud run instance. eg us-central1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#location DataGoogleCloudRunService#location}
  */
  readonly location: string;
  /**
  * Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#name DataGoogleCloudRunService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#project DataGoogleCloudRunService#project}
  */
  readonly project?: string;
}
export class DataGoogleCloudRunServiceMetadata extends cdktf.ComplexComputedList {

  // annotations - computed: true, optional: false, required: false
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getStringMapAttribute('labels');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export class DataGoogleCloudRunServiceStatusConditions extends cdktf.ComplexComputedList {

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleCloudRunServiceStatus extends cdktf.ComplexComputedList {

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('conditions');
  }

  // latest_created_revision_name - computed: true, optional: false, required: false
  public get latestCreatedRevisionName() {
    return this.getStringAttribute('latest_created_revision_name');
  }

  // latest_ready_revision_name - computed: true, optional: false, required: false
  public get latestReadyRevisionName() {
    return this.getStringAttribute('latest_ready_revision_name');
  }

  // observed_generation - computed: true, optional: false, required: false
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export class DataGoogleCloudRunServiceTemplateMetadata extends cdktf.ComplexComputedList {

  // annotations - computed: true, optional: false, required: false
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getStringMapAttribute('labels');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnv extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef extends cdktf.ComplexComputedList {

  // local_object_reference - computed: true, optional: false, required: false
  public get localObjectReference() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('local_object_reference');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef extends cdktf.ComplexComputedList {

  // local_object_reference - computed: true, optional: false, required: false
  public get localObjectReference() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('local_object_reference');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom extends cdktf.ComplexComputedList {

  // config_map_ref - computed: true, optional: false, required: false
  public get configMapRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_map_ref');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_ref');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersPorts extends cdktf.ComplexComputedList {

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainersResources extends cdktf.ComplexComputedList {

  // limits - computed: true, optional: false, required: false
  public get limits() {
    return this.getStringMapAttribute('limits');
  }

  // requests - computed: true, optional: false, required: false
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
}
export class DataGoogleCloudRunServiceTemplateSpecContainers extends cdktf.ComplexComputedList {

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('env')));
  }

  // env_from - computed: true, optional: false, required: false
  public get envFrom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('env_from');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ports');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resources');
  }

  // working_dir - computed: true, optional: false, required: false
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}
export class DataGoogleCloudRunServiceTemplateSpec extends cdktf.ComplexComputedList {

  // container_concurrency - computed: true, optional: false, required: false
  public get containerConcurrency() {
    return this.getNumberAttribute('container_concurrency');
  }

  // containers - computed: true, optional: false, required: false
  public get containers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('containers');
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // serving_state - computed: true, optional: false, required: false
  public get servingState() {
    return this.getStringAttribute('serving_state');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataGoogleCloudRunServiceTemplate extends cdktf.ComplexComputedList {

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spec');
  }
}
export class DataGoogleCloudRunServiceTraffic extends cdktf.ComplexComputedList {

  // latest_revision - computed: true, optional: false, required: false
  public get latestRevision() {
    return this.getBooleanAttribute('latest_revision');
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // revision_name - computed: true, optional: false, required: false
  public get revisionName() {
    return this.getStringAttribute('revision_name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service google_cloud_run_service}
*/
export class DataGoogleCloudRunService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloud_run_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service google_cloud_run_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleCloudRunServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleCloudRunServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_service',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autogenerate_revision_name - computed: true, optional: false, required: false
  public get autogenerateRevisionName() {
    return this.getBooleanAttribute('autogenerate_revision_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(index: string) {
    return new DataGoogleCloudRunServiceMetadata(this, 'metadata', index, false);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new DataGoogleCloudRunServiceStatus(this, 'status', index, false);
  }

  // template - computed: true, optional: false, required: false
  public template(index: string) {
    return new DataGoogleCloudRunServiceTemplate(this, 'template', index, false);
  }

  // traffic - computed: true, optional: false, required: false
  public traffic(index: string) {
    return new DataGoogleCloudRunServiceTraffic(this, 'traffic', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
