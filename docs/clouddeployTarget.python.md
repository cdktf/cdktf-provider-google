# `clouddeployTarget` Submodule <a name="`clouddeployTarget` Submodule" id="@cdktf/provider-google.clouddeployTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployTarget <a name="ClouddeployTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target google_clouddeploy_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  annotations: typing.Mapping[str] = None,
  anthos_cluster: ClouddeployTargetAnthosCluster = None,
  associated_entities: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntities]] = None,
  custom_target: ClouddeployTargetCustomTarget = None,
  deploy_parameters: typing.Mapping[str] = None,
  description: str = None,
  execution_configs: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]] = None,
  gke: ClouddeployTargetGke = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  multi_target: ClouddeployTargetMultiTarget = None,
  project: str = None,
  require_approval: typing.Union[bool, IResolvable] = None,
  run: ClouddeployTargetRun = None,
  timeouts: ClouddeployTargetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.anthosCluster">anthos_cluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.associatedEntities">associated_entities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]</code> | associated_entities block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.customTarget">custom_target</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | custom_target block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.deployParameters">deploy_parameters</a></code> | <code>typing.Mapping[str]</code> | Optional. The deploy parameters to use for this target. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.executionConfigs">execution_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]</code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.multiTarget">multi_target</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.name"></a>

- *Type:* str

Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#name ClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#annotations ClouddeployTarget#annotations}

---

##### `anthos_cluster`<sup>Optional</sup> <a name="anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.anthosCluster"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}

---

##### `associated_entities`<sup>Optional</sup> <a name="associated_entities" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.associatedEntities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]

associated_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#associated_entities ClouddeployTarget#associated_entities}

---

##### `custom_target`<sup>Optional</sup> <a name="custom_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.customTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

custom_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#custom_target ClouddeployTarget#custom_target}

---

##### `deploy_parameters`<sup>Optional</sup> <a name="deploy_parameters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.deployParameters"></a>

- *Type:* typing.Mapping[str]

Optional. The deploy parameters to use for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#deploy_parameters ClouddeployTarget#deploy_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#description ClouddeployTarget#description}

---

##### `execution_configs`<sup>Optional</sup> <a name="execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.executionConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.gke"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#gke ClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#labels ClouddeployTarget#labels}

---

##### `multi_target`<sup>Optional</sup> <a name="multi_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.multiTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#multi_target ClouddeployTarget#multi_target}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#project ClouddeployTarget#project}

---

##### `require_approval`<sup>Optional</sup> <a name="require_approval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.requireApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#require_approval ClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.run"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#run ClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#timeouts ClouddeployTarget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster">put_anthos_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAssociatedEntities">put_associated_entities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget">put_custom_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs">put_execution_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke">put_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget">put_multi_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun">put_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnthosCluster">reset_anthos_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAssociatedEntities">reset_associated_entities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetCustomTarget">reset_custom_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDeployParameters">reset_deploy_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetExecutionConfigs">reset_execution_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetGke">reset_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetMultiTarget">reset_multi_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRequireApproval">reset_require_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRun">reset_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_anthos_cluster` <a name="put_anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster"></a>

```python
def put_anthos_cluster(
  membership: str = None
) -> None
```

###### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster.parameter.membership"></a>

- *Type:* str

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}

---

##### `put_associated_entities` <a name="put_associated_entities" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAssociatedEntities"></a>

```python
def put_associated_entities(
  value: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAssociatedEntities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]

---

##### `put_custom_target` <a name="put_custom_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget"></a>

```python
def put_custom_target(
  custom_target_type: str
) -> None
```

###### `custom_target_type`<sup>Required</sup> <a name="custom_target_type" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget.parameter.customTargetType"></a>

- *Type:* str

Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#custom_target_type ClouddeployTarget#custom_target_type}

---

##### `put_execution_configs` <a name="put_execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs"></a>

```python
def put_execution_configs(
  value: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

---

##### `put_gke` <a name="put_gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke"></a>

```python
def put_gke(
  cluster: str = None,
  dns_endpoint: typing.Union[bool, IResolvable] = None,
  internal_ip: typing.Union[bool, IResolvable] = None,
  proxy_url: str = None
) -> None
```

###### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke.parameter.cluster"></a>

- *Type:* str

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}

---

###### `dns_endpoint`<sup>Optional</sup> <a name="dns_endpoint" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke.parameter.dnsEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If set, the cluster will be accessed using the DNS endpoint. Note that both `dns_endpoint` and `internal_ip` cannot be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#dns_endpoint ClouddeployTarget#dns_endpoint}

---

###### `internal_ip`<sup>Optional</sup> <a name="internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke.parameter.internalIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}

---

###### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke.parameter.proxyUrl"></a>

- *Type:* str

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#proxy_url ClouddeployTarget#proxy_url}

---

##### `put_multi_target` <a name="put_multi_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget"></a>

```python
def put_multi_target(
  target_ids: typing.List[str]
) -> None
```

###### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget.parameter.targetIds"></a>

- *Type:* typing.List[str]

Required. The target_ids of this multiTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#target_ids ClouddeployTarget#target_ids}

---

##### `put_run` <a name="put_run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun"></a>

```python
def put_run(
  location: str
) -> None
```

###### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun.parameter.location"></a>

- *Type:* str

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#create ClouddeployTarget#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#update ClouddeployTarget#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_anthos_cluster` <a name="reset_anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnthosCluster"></a>

```python
def reset_anthos_cluster() -> None
```

##### `reset_associated_entities` <a name="reset_associated_entities" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAssociatedEntities"></a>

```python
def reset_associated_entities() -> None
```

##### `reset_custom_target` <a name="reset_custom_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetCustomTarget"></a>

```python
def reset_custom_target() -> None
```

##### `reset_deploy_parameters` <a name="reset_deploy_parameters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDeployParameters"></a>

```python
def reset_deploy_parameters() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_configs` <a name="reset_execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetExecutionConfigs"></a>

```python
def reset_execution_configs() -> None
```

##### `reset_gke` <a name="reset_gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetGke"></a>

```python
def reset_gke() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_multi_target` <a name="reset_multi_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetMultiTarget"></a>

```python
def reset_multi_target() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_require_approval` <a name="reset_require_approval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRequireApproval"></a>

```python
def reset_require_approval() -> None
```

##### `reset_run` <a name="reset_run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRun"></a>

```python
def reset_run() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ClouddeployTarget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ClouddeployTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ClouddeployTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ClouddeployTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosCluster">anthos_cluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference">ClouddeployTargetAnthosClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.associatedEntities">associated_entities</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList">ClouddeployTargetAssociatedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.customTarget">custom_target</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference">ClouddeployTargetCustomTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigs">execution_configs</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList">ClouddeployTargetExecutionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference">ClouddeployTargetGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTarget">multi_target</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference">ClouddeployTargetMultiTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference">ClouddeployTargetRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference">ClouddeployTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosClusterInput">anthos_cluster_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.associatedEntitiesInput">associated_entities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.customTargetInput">custom_target_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParametersInput">deploy_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigsInput">execution_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gkeInput">gke_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTargetInput">multi_target_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApprovalInput">require_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.runInput">run_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParameters">deploy_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `anthos_cluster`<sup>Required</sup> <a name="anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosCluster"></a>

```python
anthos_cluster: ClouddeployTargetAnthosClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference">ClouddeployTargetAnthosClusterOutputReference</a>

---

##### `associated_entities`<sup>Required</sup> <a name="associated_entities" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.associatedEntities"></a>

```python
associated_entities: ClouddeployTargetAssociatedEntitiesList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList">ClouddeployTargetAssociatedEntitiesList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_target`<sup>Required</sup> <a name="custom_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.customTarget"></a>

```python
custom_target: ClouddeployTargetCustomTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference">ClouddeployTargetCustomTargetOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `execution_configs`<sup>Required</sup> <a name="execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigs"></a>

```python
execution_configs: ClouddeployTargetExecutionConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList">ClouddeployTargetExecutionConfigsList</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gke"></a>

```python
gke: ClouddeployTargetGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference">ClouddeployTargetGkeOutputReference</a>

---

##### `multi_target`<sup>Required</sup> <a name="multi_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTarget"></a>

```python
multi_target: ClouddeployTargetMultiTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference">ClouddeployTargetMultiTargetOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.run"></a>

```python
run: ClouddeployTargetRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference">ClouddeployTargetRunOutputReference</a>

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeouts"></a>

```python
timeouts: ClouddeployTargetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference">ClouddeployTargetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `anthos_cluster_input`<sup>Optional</sup> <a name="anthos_cluster_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosClusterInput"></a>

```python
anthos_cluster_input: ClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---

##### `associated_entities_input`<sup>Optional</sup> <a name="associated_entities_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.associatedEntitiesInput"></a>

```python
associated_entities_input: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]

---

##### `custom_target_input`<sup>Optional</sup> <a name="custom_target_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.customTargetInput"></a>

```python
custom_target_input: ClouddeployTargetCustomTarget
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

---

##### `deploy_parameters_input`<sup>Optional</sup> <a name="deploy_parameters_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParametersInput"></a>

```python
deploy_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_configs_input`<sup>Optional</sup> <a name="execution_configs_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigsInput"></a>

```python
execution_configs_input: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

---

##### `gke_input`<sup>Optional</sup> <a name="gke_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gkeInput"></a>

```python
gke_input: ClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multi_target_input`<sup>Optional</sup> <a name="multi_target_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTargetInput"></a>

```python
multi_target_input: ClouddeployTargetMultiTarget
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `require_approval_input`<sup>Optional</sup> <a name="require_approval_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApprovalInput"></a>

```python
require_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_input`<sup>Optional</sup> <a name="run_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.runInput"></a>

```python
run_input: ClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ClouddeployTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deploy_parameters`<sup>Required</sup> <a name="deploy_parameters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParameters"></a>

```python
deploy_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `require_approval`<sup>Required</sup> <a name="require_approval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApproval"></a>

```python
require_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployTargetAnthosCluster <a name="ClouddeployTargetAnthosCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAnthosCluster(
  membership: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.property.membership">membership</a></code> | <code>str</code> | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.property.membership"></a>

```python
membership: str
```

- *Type:* str

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}

---

### ClouddeployTargetAssociatedEntities <a name="ClouddeployTargetAssociatedEntities" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntities(
  entity_id: str,
  anthos_clusters: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesAnthosClusters]] = None,
  gke_clusters: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesGkeClusters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.entityId">entity_id</a></code> | <code>str</code> | The name for the key in the map for which this object is mapped to in the API. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.anthosClusters">anthos_clusters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]]</code> | anthos_clusters block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.gkeClusters">gke_clusters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]]</code> | gke_clusters block. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

The name for the key in the map for which this object is mapped to in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#entity_id ClouddeployTarget#entity_id}

---

##### `anthos_clusters`<sup>Optional</sup> <a name="anthos_clusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.anthosClusters"></a>

```python
anthos_clusters: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesAnthosClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]]

anthos_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#anthos_clusters ClouddeployTarget#anthos_clusters}

---

##### `gke_clusters`<sup>Optional</sup> <a name="gke_clusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.gkeClusters"></a>

```python
gke_clusters: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#gke_clusters ClouddeployTarget#gke_clusters}

---

### ClouddeployTargetAssociatedEntitiesAnthosClusters <a name="ClouddeployTargetAssociatedEntitiesAnthosClusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters(
  membership: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters.property.membership">membership</a></code> | <code>str</code> | Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters.property.membership"></a>

```python
membership: str
```

- *Type:* str

Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}

---

### ClouddeployTargetAssociatedEntitiesGkeClusters <a name="ClouddeployTargetAssociatedEntitiesGkeClusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters(
  cluster: str = None,
  internal_ip: typing.Union[bool, IResolvable] = None,
  proxy_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.cluster">cluster</a></code> | <code>str</code> | Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.internalIp">internal_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.proxyUrl">proxy_url</a></code> | <code>str</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}

---

##### `internal_ip`<sup>Optional</sup> <a name="internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.internalIp"></a>

```python
internal_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}

---

##### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#proxy_url ClouddeployTarget#proxy_url}

---

### ClouddeployTargetConfig <a name="ClouddeployTargetConfig" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  annotations: typing.Mapping[str] = None,
  anthos_cluster: ClouddeployTargetAnthosCluster = None,
  associated_entities: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntities]] = None,
  custom_target: ClouddeployTargetCustomTarget = None,
  deploy_parameters: typing.Mapping[str] = None,
  description: str = None,
  execution_configs: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]] = None,
  gke: ClouddeployTargetGke = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  multi_target: ClouddeployTargetMultiTarget = None,
  project: str = None,
  require_approval: typing.Union[bool, IResolvable] = None,
  run: ClouddeployTargetRun = None,
  timeouts: ClouddeployTargetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.name">name</a></code> | <code>str</code> | Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.anthosCluster">anthos_cluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.associatedEntities">associated_entities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]</code> | associated_entities block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.customTarget">custom_target</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | custom_target block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.deployParameters">deploy_parameters</a></code> | <code>typing.Mapping[str]</code> | Optional. The deploy parameters to use for this target. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.executionConfigs">execution_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]</code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.multiTarget">multi_target</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#name ClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#annotations ClouddeployTarget#annotations}

---

##### `anthos_cluster`<sup>Optional</sup> <a name="anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.anthosCluster"></a>

```python
anthos_cluster: ClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}

---

##### `associated_entities`<sup>Optional</sup> <a name="associated_entities" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.associatedEntities"></a>

```python
associated_entities: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]

associated_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#associated_entities ClouddeployTarget#associated_entities}

---

##### `custom_target`<sup>Optional</sup> <a name="custom_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.customTarget"></a>

```python
custom_target: ClouddeployTargetCustomTarget
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

custom_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#custom_target ClouddeployTarget#custom_target}

---

##### `deploy_parameters`<sup>Optional</sup> <a name="deploy_parameters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.deployParameters"></a>

```python
deploy_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. The deploy parameters to use for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#deploy_parameters ClouddeployTarget#deploy_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#description ClouddeployTarget#description}

---

##### `execution_configs`<sup>Optional</sup> <a name="execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.executionConfigs"></a>

```python
execution_configs: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.gke"></a>

```python
gke: ClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#gke ClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#labels ClouddeployTarget#labels}

---

##### `multi_target`<sup>Optional</sup> <a name="multi_target" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.multiTarget"></a>

```python
multi_target: ClouddeployTargetMultiTarget
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#multi_target ClouddeployTarget#multi_target}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#project ClouddeployTarget#project}

---

##### `require_approval`<sup>Optional</sup> <a name="require_approval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.requireApproval"></a>

```python
require_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#require_approval ClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.run"></a>

```python
run: ClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#run ClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.timeouts"></a>

```python
timeouts: ClouddeployTargetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#timeouts ClouddeployTarget#timeouts}

---

### ClouddeployTargetCustomTarget <a name="ClouddeployTargetCustomTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetCustomTarget(
  custom_target_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.property.customTargetType">custom_target_type</a></code> | <code>str</code> | Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. |

---

##### `custom_target_type`<sup>Required</sup> <a name="custom_target_type" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.property.customTargetType"></a>

```python
custom_target_type: str
```

- *Type:* str

Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#custom_target_type ClouddeployTarget#custom_target_type}

---

### ClouddeployTargetExecutionConfigs <a name="ClouddeployTargetExecutionConfigs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetExecutionConfigs(
  usages: typing.List[str],
  artifact_storage: str = None,
  execution_timeout: str = None,
  service_account: str = None,
  verbose: typing.Union[bool, IResolvable] = None,
  worker_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.usages">usages</a></code> | <code>typing.List[str]</code> | Required. Usages when this configuration should be applied. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.artifactStorage">artifact_storage</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.executionTimeout">execution_timeout</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.serviceAccount">service_account</a></code> | <code>str</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.verbose">verbose</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If true, additional logging will be enabled when running builds in this execution environment. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.workerPool">worker_pool</a></code> | <code>str</code> | Optional. |

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

Required. Usages when this configuration should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#usages ClouddeployTarget#usages}

---

##### `artifact_storage`<sup>Optional</sup> <a name="artifact_storage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.artifactStorage"></a>

```python
artifact_storage: str
```

- *Type:* str

Optional.

Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}

---

##### `execution_timeout`<sup>Optional</sup> <a name="execution_timeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.executionTimeout"></a>

```python
execution_timeout: str
```

- *Type:* str

Optional.

Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#execution_timeout ClouddeployTarget#execution_timeout}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}

---

##### `verbose`<sup>Optional</sup> <a name="verbose" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.verbose"></a>

```python
verbose: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, additional logging will be enabled when running builds in this execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#verbose ClouddeployTarget#verbose}

---

##### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

Optional.

The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#worker_pool ClouddeployTarget#worker_pool}

---

### ClouddeployTargetGke <a name="ClouddeployTargetGke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetGke(
  cluster: str = None,
  dns_endpoint: typing.Union[bool, IResolvable] = None,
  internal_ip: typing.Union[bool, IResolvable] = None,
  proxy_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.cluster">cluster</a></code> | <code>str</code> | Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.dnsEndpoint">dns_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.internalIp">internal_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.proxyUrl">proxy_url</a></code> | <code>str</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}

---

##### `dns_endpoint`<sup>Optional</sup> <a name="dns_endpoint" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.dnsEndpoint"></a>

```python
dns_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If set, the cluster will be accessed using the DNS endpoint. Note that both `dns_endpoint` and `internal_ip` cannot be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#dns_endpoint ClouddeployTarget#dns_endpoint}

---

##### `internal_ip`<sup>Optional</sup> <a name="internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.internalIp"></a>

```python
internal_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}

---

##### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#proxy_url ClouddeployTarget#proxy_url}

---

### ClouddeployTargetMultiTarget <a name="ClouddeployTargetMultiTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetMultiTarget(
  target_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | Required. The target_ids of this multiTarget. |

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

Required. The target_ids of this multiTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#target_ids ClouddeployTarget#target_ids}

---

### ClouddeployTargetRun <a name="ClouddeployTargetRun" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetRun(
  location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.property.location">location</a></code> | <code>str</code> | Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.property.location"></a>

```python
location: str
```

- *Type:* str

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

### ClouddeployTargetTimeouts <a name="ClouddeployTargetTimeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#create ClouddeployTarget#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#update ClouddeployTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#create ClouddeployTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/clouddeploy_target#update ClouddeployTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployTargetAnthosClusterOutputReference <a name="ClouddeployTargetAnthosClusterOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resetMembership">reset_membership</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_membership` <a name="reset_membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resetMembership"></a>

```python
def reset_membership() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membershipInput">membership_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership_input`<sup>Optional</sup> <a name="membership_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membershipInput"></a>

```python
membership_input: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---


### ClouddeployTargetAssociatedEntitiesAnthosClustersList <a name="ClouddeployTargetAssociatedEntitiesAnthosClustersList" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesAnthosClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]]

---


### ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference <a name="ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resetMembership">reset_membership</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_membership` <a name="reset_membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resetMembership"></a>

```python
def reset_membership() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membershipInput">membership_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership_input`<sup>Optional</sup> <a name="membership_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membershipInput"></a>

```python
membership_input: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployTargetAssociatedEntitiesAnthosClusters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]

---


### ClouddeployTargetAssociatedEntitiesGkeClustersList <a name="ClouddeployTargetAssociatedEntitiesGkeClustersList" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]]

---


### ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference <a name="ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetCluster">reset_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetInternalIp">reset_internal_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetProxyUrl">reset_proxy_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetCluster"></a>

```python
def reset_cluster() -> None
```

##### `reset_internal_ip` <a name="reset_internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetInternalIp"></a>

```python
def reset_internal_ip() -> None
```

##### `reset_proxy_url` <a name="reset_proxy_url" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetProxyUrl"></a>

```python
def reset_proxy_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIpInput">internal_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrlInput">proxy_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIp">internal_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrl">proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `internal_ip_input`<sup>Optional</sup> <a name="internal_ip_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIpInput"></a>

```python
internal_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_url_input`<sup>Optional</sup> <a name="proxy_url_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrlInput"></a>

```python
proxy_url_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIp"></a>

```python
internal_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_url`<sup>Required</sup> <a name="proxy_url" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployTargetAssociatedEntitiesGkeClusters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]

---


### ClouddeployTargetAssociatedEntitiesList <a name="ClouddeployTargetAssociatedEntitiesList" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddeployTargetAssociatedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]]

---


### ClouddeployTargetAssociatedEntitiesOutputReference <a name="ClouddeployTargetAssociatedEntitiesOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters">put_anthos_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters">put_gke_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resetAnthosClusters">reset_anthos_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resetGkeClusters">reset_gke_clusters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_anthos_clusters` <a name="put_anthos_clusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters"></a>

```python
def put_anthos_clusters(
  value: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesAnthosClusters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]]

---

##### `put_gke_clusters` <a name="put_gke_clusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters"></a>

```python
def put_gke_clusters(
  value: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesGkeClusters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]]

---

##### `reset_anthos_clusters` <a name="reset_anthos_clusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resetAnthosClusters"></a>

```python
def reset_anthos_clusters() -> None
```

##### `reset_gke_clusters` <a name="reset_gke_clusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resetGkeClusters"></a>

```python
def reset_gke_clusters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClusters">anthos_clusters</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList">ClouddeployTargetAssociatedEntitiesAnthosClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClusters">gke_clusters</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList">ClouddeployTargetAssociatedEntitiesGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClustersInput">anthos_clusters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClustersInput">gke_clusters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anthos_clusters`<sup>Required</sup> <a name="anthos_clusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClusters"></a>

```python
anthos_clusters: ClouddeployTargetAssociatedEntitiesAnthosClustersList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList">ClouddeployTargetAssociatedEntitiesAnthosClustersList</a>

---

##### `gke_clusters`<sup>Required</sup> <a name="gke_clusters" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClusters"></a>

```python
gke_clusters: ClouddeployTargetAssociatedEntitiesGkeClustersList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList">ClouddeployTargetAssociatedEntitiesGkeClustersList</a>

---

##### `anthos_clusters_input`<sup>Optional</sup> <a name="anthos_clusters_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClustersInput"></a>

```python
anthos_clusters_input: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesAnthosClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>]]

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `gke_clusters_input`<sup>Optional</sup> <a name="gke_clusters_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClustersInput"></a>

```python
gke_clusters_input: typing.Union[IResolvable, typing.List[ClouddeployTargetAssociatedEntitiesGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>]]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployTargetAssociatedEntities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>]

---


### ClouddeployTargetCustomTargetOutputReference <a name="ClouddeployTargetCustomTargetOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetCustomTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput">custom_target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetType">custom_target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_target_type_input`<sup>Optional</sup> <a name="custom_target_type_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput"></a>

```python
custom_target_type_input: str
```

- *Type:* str

---

##### `custom_target_type`<sup>Required</sup> <a name="custom_target_type" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetType"></a>

```python
custom_target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployTargetCustomTarget
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

---


### ClouddeployTargetExecutionConfigsList <a name="ClouddeployTargetExecutionConfigsList" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetExecutionConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddeployTargetExecutionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

---


### ClouddeployTargetExecutionConfigsOutputReference <a name="ClouddeployTargetExecutionConfigsOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage">reset_artifact_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout">reset_execution_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetVerbose">reset_verbose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool">reset_worker_pool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_artifact_storage` <a name="reset_artifact_storage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage"></a>

```python
def reset_artifact_storage() -> None
```

##### `reset_execution_timeout` <a name="reset_execution_timeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout"></a>

```python
def reset_execution_timeout() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_verbose` <a name="reset_verbose" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetVerbose"></a>

```python
def reset_verbose() -> None
```

##### `reset_worker_pool` <a name="reset_worker_pool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool"></a>

```python
def reset_worker_pool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput">artifact_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput">execution_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usagesInput">usages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verboseInput">verbose_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput">worker_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage">artifact_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout">execution_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usages">usages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verbose">verbose</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPool">worker_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_storage_input`<sup>Optional</sup> <a name="artifact_storage_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput"></a>

```python
artifact_storage_input: str
```

- *Type:* str

---

##### `execution_timeout_input`<sup>Optional</sup> <a name="execution_timeout_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput"></a>

```python
execution_timeout_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `usages_input`<sup>Optional</sup> <a name="usages_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usagesInput"></a>

```python
usages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verbose_input`<sup>Optional</sup> <a name="verbose_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verboseInput"></a>

```python
verbose_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `worker_pool_input`<sup>Optional</sup> <a name="worker_pool_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput"></a>

```python
worker_pool_input: str
```

- *Type:* str

---

##### `artifact_storage`<sup>Required</sup> <a name="artifact_storage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage"></a>

```python
artifact_storage: str
```

- *Type:* str

---

##### `execution_timeout`<sup>Required</sup> <a name="execution_timeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout"></a>

```python
execution_timeout: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verbose`<sup>Required</sup> <a name="verbose" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verbose"></a>

```python
verbose: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `worker_pool`<sup>Required</sup> <a name="worker_pool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployTargetExecutionConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]

---


### ClouddeployTargetGkeOutputReference <a name="ClouddeployTargetGkeOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetGkeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetCluster">reset_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetDnsEndpoint">reset_dns_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetInternalIp">reset_internal_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetProxyUrl">reset_proxy_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetCluster"></a>

```python
def reset_cluster() -> None
```

##### `reset_dns_endpoint` <a name="reset_dns_endpoint" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetDnsEndpoint"></a>

```python
def reset_dns_endpoint() -> None
```

##### `reset_internal_ip` <a name="reset_internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetInternalIp"></a>

```python
def reset_internal_ip() -> None
```

##### `reset_proxy_url` <a name="reset_proxy_url" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetProxyUrl"></a>

```python
def reset_proxy_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.dnsEndpointInput">dns_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIpInput">internal_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrlInput">proxy_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.dnsEndpoint">dns_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIp">internal_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrl">proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `dns_endpoint_input`<sup>Optional</sup> <a name="dns_endpoint_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.dnsEndpointInput"></a>

```python
dns_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_ip_input`<sup>Optional</sup> <a name="internal_ip_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIpInput"></a>

```python
internal_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_url_input`<sup>Optional</sup> <a name="proxy_url_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrlInput"></a>

```python
proxy_url_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `dns_endpoint`<sup>Required</sup> <a name="dns_endpoint" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.dnsEndpoint"></a>

```python
dns_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIp"></a>

```python
internal_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_url`<sup>Required</sup> <a name="proxy_url" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---


### ClouddeployTargetMultiTargetOutputReference <a name="ClouddeployTargetMultiTargetOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetMultiTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIdsInput">target_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_ids_input`<sup>Optional</sup> <a name="target_ids_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIdsInput"></a>

```python
target_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployTargetMultiTarget
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

---


### ClouddeployTargetRunOutputReference <a name="ClouddeployTargetRunOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetRunOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---


### ClouddeployTargetTimeoutsOutputReference <a name="ClouddeployTargetTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>]

---



