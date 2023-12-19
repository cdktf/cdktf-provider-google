# `deploymentManagerDeployment` Submodule <a name="`deploymentManagerDeployment` Submodule" id="@cdktf/provider-google.deploymentManagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentManagerDeployment <a name="DeploymentManagerDeployment" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment google_deployment_manager_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  target: DeploymentManagerDeploymentTarget,
  create_policy: str = None,
  delete_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentLabels]] = None,
  preview: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: DeploymentManagerDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.createPolicy">create_policy</a></code> | <code>str</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.deletePolicy">delete_policy</a></code> | <code>str</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#target DeploymentManagerDeployment#target}

---

##### `create_policy`<sup>Optional</sup> <a name="create_policy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.createPolicy"></a>

- *Type:* str

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#create_policy DeploymentManagerDeployment#create_policy}

---

##### `delete_policy`<sup>Optional</sup> <a name="delete_policy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.deletePolicy"></a>

- *Type:* str

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#delete_policy DeploymentManagerDeployment#delete_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.description"></a>

- *Type:* str

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#description DeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#labels DeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.preview"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#preview DeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#timeouts DeploymentManagerDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetCreatePolicy">reset_create_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletePolicy">reset_delete_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetPreview">reset_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]

---

##### `put_target` <a name="put_target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget"></a>

```python
def put_target(
  config: DeploymentManagerDeploymentTargetConfig,
  imports: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentTargetImports]] = None
) -> None
```

###### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#config DeploymentManagerDeployment#config}

---

###### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget.parameter.imports"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#imports DeploymentManagerDeployment#imports}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}.

---

##### `reset_create_policy` <a name="reset_create_policy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetCreatePolicy"></a>

```python
def reset_create_policy() -> None
```

##### `reset_delete_policy` <a name="reset_delete_policy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletePolicy"></a>

```python
def reset_delete_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_preview` <a name="reset_preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetPreview"></a>

```python
def reset_preview() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DeploymentManagerDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DeploymentManagerDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeploymentManagerDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeploymentManagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DeploymentManagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList">DeploymentManagerDeploymentLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.manifest">manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference">DeploymentManagerDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference">DeploymentManagerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicyInput">create_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicyInput">delete_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.previewInput">preview_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicy">create_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicy">delete_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labels"></a>

```python
labels: DeploymentManagerDeploymentLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList">DeploymentManagerDeploymentLabelsList</a>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.target"></a>

```python
target: DeploymentManagerDeploymentTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference">DeploymentManagerDeploymentTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeouts"></a>

```python
timeouts: DeploymentManagerDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference">DeploymentManagerDeploymentTimeoutsOutputReference</a>

---

##### `create_policy_input`<sup>Optional</sup> <a name="create_policy_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicyInput"></a>

```python
create_policy_input: str
```

- *Type:* str

---

##### `delete_policy_input`<sup>Optional</sup> <a name="delete_policy_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicyInput"></a>

```python
delete_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preview_input`<sup>Optional</sup> <a name="preview_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.previewInput"></a>

```python
preview_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.targetInput"></a>

```python
target_input: DeploymentManagerDeploymentTarget
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DeploymentManagerDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>]

---

##### `create_policy`<sup>Required</sup> <a name="create_policy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicy"></a>

```python
create_policy: str
```

- *Type:* str

---

##### `delete_policy`<sup>Required</sup> <a name="delete_policy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicy"></a>

```python
delete_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.preview"></a>

```python
preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentManagerDeploymentConfig <a name="DeploymentManagerDeploymentConfig" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  target: DeploymentManagerDeploymentTarget,
  create_policy: str = None,
  delete_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentLabels]] = None,
  preview: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: DeploymentManagerDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.name">name</a></code> | <code>str</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.createPolicy">create_policy</a></code> | <code>str</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletePolicy">delete_policy</a></code> | <code>str</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.description">description</a></code> | <code>str</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.target"></a>

```python
target: DeploymentManagerDeploymentTarget
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#target DeploymentManagerDeployment#target}

---

##### `create_policy`<sup>Optional</sup> <a name="create_policy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.createPolicy"></a>

```python
create_policy: str
```

- *Type:* str

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#create_policy DeploymentManagerDeployment#create_policy}

---

##### `delete_policy`<sup>Optional</sup> <a name="delete_policy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletePolicy"></a>

```python
delete_policy: str
```

- *Type:* str

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#delete_policy DeploymentManagerDeployment#delete_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#description DeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#labels DeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.preview"></a>

```python
preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#preview DeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.timeouts"></a>

```python
timeouts: DeploymentManagerDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#timeouts DeploymentManagerDeployment#timeouts}

---

### DeploymentManagerDeploymentLabels <a name="DeploymentManagerDeploymentLabels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentLabels(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.key">key</a></code> | <code>str</code> | Key for label. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.value">value</a></code> | <code>str</code> | Value of label. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Key for label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#key DeploymentManagerDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Value of label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#value DeploymentManagerDeployment#value}

---

### DeploymentManagerDeploymentTarget <a name="DeploymentManagerDeploymentTarget" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTarget(
  config: DeploymentManagerDeploymentTargetConfig,
  imports: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentTargetImports]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.imports">imports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]]</code> | imports block. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.config"></a>

```python
config: DeploymentManagerDeploymentTargetConfig
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#config DeploymentManagerDeployment#config}

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.imports"></a>

```python
imports: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentTargetImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#imports DeploymentManagerDeployment#imports}

---

### DeploymentManagerDeploymentTargetConfig <a name="DeploymentManagerDeploymentTargetConfig" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig(
  content: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.property.content">content</a></code> | <code>str</code> | The full YAML contents of your configuration file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

### DeploymentManagerDeploymentTargetImports <a name="DeploymentManagerDeploymentTargetImports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports(
  content: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.content">content</a></code> | <code>str</code> | The full contents of the template that you want to import. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.name">name</a></code> | <code>str</code> | The name of the template to import, as declared in the YAML configuration. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.content"></a>

```python
content: str
```

- *Type:* str

The full contents of the template that you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the template to import, as declared in the YAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

### DeploymentManagerDeploymentTimeouts <a name="DeploymentManagerDeploymentTimeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentManagerDeploymentLabelsList <a name="DeploymentManagerDeploymentLabelsList" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeploymentManagerDeploymentLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]]

---


### DeploymentManagerDeploymentLabelsOutputReference <a name="DeploymentManagerDeploymentLabelsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DeploymentManagerDeploymentLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>]

---


### DeploymentManagerDeploymentTargetConfigOutputReference <a name="DeploymentManagerDeploymentTargetConfigOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeploymentManagerDeploymentTargetConfig
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---


### DeploymentManagerDeploymentTargetImportsList <a name="DeploymentManagerDeploymentTargetImportsList" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeploymentManagerDeploymentTargetImportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentTargetImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]]

---


### DeploymentManagerDeploymentTargetImportsOutputReference <a name="DeploymentManagerDeploymentTargetImportsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DeploymentManagerDeploymentTargetImports]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]

---


### DeploymentManagerDeploymentTargetOutputReference <a name="DeploymentManagerDeploymentTargetOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports">put_imports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resetImports">reset_imports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig"></a>

```python
def put_config(
  content: str
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig.parameter.content"></a>

- *Type:* str

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

##### `put_imports` <a name="put_imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports"></a>

```python
def put_imports(
  value: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentTargetImports]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]]

---

##### `reset_imports` <a name="reset_imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resetImports"></a>

```python
def reset_imports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference">DeploymentManagerDeploymentTargetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList">DeploymentManagerDeploymentTargetImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.importsInput">imports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.config"></a>

```python
config: DeploymentManagerDeploymentTargetConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference">DeploymentManagerDeploymentTargetConfigOutputReference</a>

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.imports"></a>

```python
imports: DeploymentManagerDeploymentTargetImportsList
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList">DeploymentManagerDeploymentTargetImportsList</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.configInput"></a>

```python
config_input: DeploymentManagerDeploymentTargetConfig
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---

##### `imports_input`<sup>Optional</sup> <a name="imports_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.importsInput"></a>

```python
imports_input: typing.Union[IResolvable, typing.List[DeploymentManagerDeploymentTargetImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.internalValue"></a>

```python
internal_value: DeploymentManagerDeploymentTarget
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---


### DeploymentManagerDeploymentTimeoutsOutputReference <a name="DeploymentManagerDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import deployment_manager_deployment

deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DeploymentManagerDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>]

---



