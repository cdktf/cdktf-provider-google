# `colabRuntime` Submodule <a name="`colabRuntime` Submodule" id="@cdktf/provider-google.colabRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabRuntime <a name="ColabRuntime" id="@cdktf/provider-google.colabRuntime.ColabRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime google_colab_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntime(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  runtime_user: str,
  auto_upgrade: typing.Union[bool, IResolvable] = None,
  description: str = None,
  desired_state: str = None,
  id: str = None,
  name: str = None,
  notebook_runtime_template_ref: ColabRuntimeNotebookRuntimeTemplateRef = None,
  project: str = None,
  timeouts: ColabRuntimeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.runtimeUser">runtime_user</a></code> | <code>str</code> | The user email of the NotebookRuntime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.autoUpgrade">auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Triggers an upgrade anytime the runtime is started if it is upgradable. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Colab Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#id ColabRuntime#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.notebookRuntimeTemplateRef">notebook_runtime_template_ref</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a></code> | notebook_runtime_template_ref block. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#project ColabRuntime#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.displayName"></a>

- *Type:* str

Required. The display name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#display_name ColabRuntime#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#location ColabRuntime#location}

---

##### `runtime_user`<sup>Required</sup> <a name="runtime_user" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.runtimeUser"></a>

- *Type:* str

The user email of the NotebookRuntime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#runtime_user ColabRuntime#runtime_user}

---

##### `auto_upgrade`<sup>Optional</sup> <a name="auto_upgrade" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.autoUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Triggers an upgrade anytime the runtime is started if it is upgradable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#auto_upgrade ColabRuntime#auto_upgrade}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.description"></a>

- *Type:* str

The description of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#description ColabRuntime#description}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.desiredState"></a>

- *Type:* str

Desired state of the Colab Runtime.

Set this field to 'RUNNING' to start the runtime, and 'STOPPED' to stop it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#desired_state ColabRuntime#desired_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#id ColabRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#name ColabRuntime#name}

---

##### `notebook_runtime_template_ref`<sup>Optional</sup> <a name="notebook_runtime_template_ref" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.notebookRuntimeTemplateRef"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a>

notebook_runtime_template_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#notebook_runtime_template_ref ColabRuntime#notebook_runtime_template_ref}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#project ColabRuntime#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#timeouts ColabRuntime#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.putNotebookRuntimeTemplateRef">put_notebook_runtime_template_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetAutoUpgrade">reset_auto_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetNotebookRuntimeTemplateRef">reset_notebook_runtime_template_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntime.ColabRuntime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.colabRuntime.ColabRuntime.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.colabRuntime.ColabRuntime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.colabRuntime.ColabRuntime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.colabRuntime.ColabRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.colabRuntime.ColabRuntime.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.colabRuntime.ColabRuntime.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntime.ColabRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notebook_runtime_template_ref` <a name="put_notebook_runtime_template_ref" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putNotebookRuntimeTemplateRef"></a>

```python
def put_notebook_runtime_template_ref(
  notebook_runtime_template: str
) -> None
```

###### `notebook_runtime_template`<sup>Required</sup> <a name="notebook_runtime_template" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putNotebookRuntimeTemplateRef.parameter.notebookRuntimeTemplate"></a>

- *Type:* str

The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#notebook_runtime_template ColabRuntime#notebook_runtime_template}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#create ColabRuntime#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#delete ColabRuntime#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.colabRuntime.ColabRuntime.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#update ColabRuntime#update}.

---

##### `reset_auto_upgrade` <a name="reset_auto_upgrade" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetAutoUpgrade"></a>

```python
def reset_auto_upgrade() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notebook_runtime_template_ref` <a name="reset_notebook_runtime_template_ref" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetNotebookRuntimeTemplateRef"></a>

```python
def reset_notebook_runtime_template_ref() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntime.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ColabRuntime resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntime.ColabRuntime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntime.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ColabRuntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ColabRuntime to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ColabRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntime.ColabRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ColabRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.isUpgradable">is_upgradable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeTemplateRef">notebook_runtime_template_ref</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference">ColabRuntimeNotebookRuntimeTemplateRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeType">notebook_runtime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference">ColabRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.autoUpgradeInput">auto_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeTemplateRefInput">notebook_runtime_template_ref_input</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.runtimeUserInput">runtime_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.autoUpgrade">auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.runtimeUser">runtime_user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `is_upgradable`<sup>Required</sup> <a name="is_upgradable" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.isUpgradable"></a>

```python
is_upgradable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `notebook_runtime_template_ref`<sup>Required</sup> <a name="notebook_runtime_template_ref" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeTemplateRef"></a>

```python
notebook_runtime_template_ref: ColabRuntimeNotebookRuntimeTemplateRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference">ColabRuntimeNotebookRuntimeTemplateRefOutputReference</a>

---

##### `notebook_runtime_type`<sup>Required</sup> <a name="notebook_runtime_type" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeType"></a>

```python
notebook_runtime_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.timeouts"></a>

```python
timeouts: ColabRuntimeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference">ColabRuntimeTimeoutsOutputReference</a>

---

##### `auto_upgrade_input`<sup>Optional</sup> <a name="auto_upgrade_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.autoUpgradeInput"></a>

```python
auto_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notebook_runtime_template_ref_input`<sup>Optional</sup> <a name="notebook_runtime_template_ref_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.notebookRuntimeTemplateRefInput"></a>

```python
notebook_runtime_template_ref_input: ColabRuntimeNotebookRuntimeTemplateRef
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `runtime_user_input`<sup>Optional</sup> <a name="runtime_user_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.runtimeUserInput"></a>

```python
runtime_user_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ColabRuntimeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a>]

---

##### `auto_upgrade`<sup>Required</sup> <a name="auto_upgrade" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.autoUpgrade"></a>

```python
auto_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `runtime_user`<sup>Required</sup> <a name="runtime_user" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.runtimeUser"></a>

```python
runtime_user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.colabRuntime.ColabRuntime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ColabRuntimeConfig <a name="ColabRuntimeConfig" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntimeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  runtime_user: str,
  auto_upgrade: typing.Union[bool, IResolvable] = None,
  description: str = None,
  desired_state: str = None,
  id: str = None,
  name: str = None,
  notebook_runtime_template_ref: ColabRuntimeNotebookRuntimeTemplateRef = None,
  project: str = None,
  timeouts: ColabRuntimeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.runtimeUser">runtime_user</a></code> | <code>str</code> | The user email of the NotebookRuntime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.autoUpgrade">auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Triggers an upgrade anytime the runtime is started if it is upgradable. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.description">description</a></code> | <code>str</code> | The description of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Colab Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#id ColabRuntime#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.notebookRuntimeTemplateRef">notebook_runtime_template_ref</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a></code> | notebook_runtime_template_ref block. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#project ColabRuntime#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#display_name ColabRuntime#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#location ColabRuntime#location}

---

##### `runtime_user`<sup>Required</sup> <a name="runtime_user" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.runtimeUser"></a>

```python
runtime_user: str
```

- *Type:* str

The user email of the NotebookRuntime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#runtime_user ColabRuntime#runtime_user}

---

##### `auto_upgrade`<sup>Optional</sup> <a name="auto_upgrade" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.autoUpgrade"></a>

```python
auto_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Triggers an upgrade anytime the runtime is started if it is upgradable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#auto_upgrade ColabRuntime#auto_upgrade}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#description ColabRuntime#description}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Desired state of the Colab Runtime.

Set this field to 'RUNNING' to start the runtime, and 'STOPPED' to stop it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#desired_state ColabRuntime#desired_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#id ColabRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#name ColabRuntime#name}

---

##### `notebook_runtime_template_ref`<sup>Optional</sup> <a name="notebook_runtime_template_ref" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.notebookRuntimeTemplateRef"></a>

```python
notebook_runtime_template_ref: ColabRuntimeNotebookRuntimeTemplateRef
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a>

notebook_runtime_template_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#notebook_runtime_template_ref ColabRuntime#notebook_runtime_template_ref}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#project ColabRuntime#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntimeConfig.property.timeouts"></a>

```python
timeouts: ColabRuntimeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#timeouts ColabRuntime#timeouts}

---

### ColabRuntimeNotebookRuntimeTemplateRef <a name="ColabRuntimeNotebookRuntimeTemplateRef" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef(
  notebook_runtime_template: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef.property.notebookRuntimeTemplate">notebook_runtime_template</a></code> | <code>str</code> | The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created. |

---

##### `notebook_runtime_template`<sup>Required</sup> <a name="notebook_runtime_template" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef.property.notebookRuntimeTemplate"></a>

```python
notebook_runtime_template: str
```

- *Type:* str

The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#notebook_runtime_template ColabRuntime#notebook_runtime_template}

---

### ColabRuntimeTimeouts <a name="ColabRuntimeTimeouts" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntimeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#create ColabRuntime#create}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#delete ColabRuntime#delete}. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#update ColabRuntime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#create ColabRuntime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#delete ColabRuntime#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/colab_runtime#update ColabRuntime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabRuntimeNotebookRuntimeTemplateRefOutputReference <a name="ColabRuntimeNotebookRuntimeTemplateRefOutputReference" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplateInput">notebook_runtime_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplate">notebook_runtime_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_runtime_template_input`<sup>Optional</sup> <a name="notebook_runtime_template_input" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplateInput"></a>

```python
notebook_runtime_template_input: str
```

- *Type:* str

---

##### `notebook_runtime_template`<sup>Required</sup> <a name="notebook_runtime_template" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplate"></a>

```python
notebook_runtime_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.internalValue"></a>

```python
internal_value: ColabRuntimeNotebookRuntimeTemplateRef
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeNotebookRuntimeTemplateRef">ColabRuntimeNotebookRuntimeTemplateRef</a>

---


### ColabRuntimeTimeoutsOutputReference <a name="ColabRuntimeTimeoutsOutputReference" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import colab_runtime

colabRuntime.ColabRuntimeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.colabRuntime.ColabRuntimeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ColabRuntimeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.colabRuntime.ColabRuntimeTimeouts">ColabRuntimeTimeouts</a>]

---



