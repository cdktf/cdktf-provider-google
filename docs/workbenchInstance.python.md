# `workbenchInstance` Submodule <a name="`workbenchInstance` Submodule" id="@cdktf/provider-google.workbenchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkbenchInstance <a name="WorkbenchInstance" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance google_workbench_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstance(
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
  desired_state: str = None,
  disable_proxy_access: typing.Union[bool, IResolvable] = None,
  gce_setup: WorkbenchInstanceGceSetup = None,
  id: str = None,
  instance_id: str = None,
  instance_owners: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: WorkbenchInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.disableProxyAccess">disable_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.gceSetup">gce_setup</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#id WorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | 'Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#project WorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.location"></a>

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#location WorkbenchInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.name"></a>

- *Type:* str

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#name WorkbenchInstance#name}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.desiredState"></a>

- *Type:* str

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#desired_state WorkbenchInstance#desired_state}

---

##### `disable_proxy_access`<sup>Optional</sup> <a name="disable_proxy_access" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.disableProxyAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disable_proxy_access WorkbenchInstance#disable_proxy_access}

---

##### `gce_setup`<sup>Optional</sup> <a name="gce_setup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.gceSetup"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#gce_setup WorkbenchInstance#gce_setup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#id WorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#instance_id WorkbenchInstance#instance_id}

---

##### `instance_owners`<sup>Optional</sup> <a name="instance_owners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.instanceOwners"></a>

- *Type:* typing.List[str]

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#instance_owners WorkbenchInstance#instance_owners}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#labels WorkbenchInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#project WorkbenchInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#timeouts WorkbenchInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup">put_gce_setup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDisableProxyAccess">reset_disable_proxy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetGceSetup">reset_gce_setup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceOwners">reset_instance_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gce_setup` <a name="put_gce_setup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup"></a>

```python
def put_gce_setup(
  accelerator_configs: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupAcceleratorConfigs]] = None,
  boot_disk: WorkbenchInstanceGceSetupBootDisk = None,
  container_image: WorkbenchInstanceGceSetupContainerImage = None,
  data_disks: WorkbenchInstanceGceSetupDataDisks = None,
  disable_public_ip: typing.Union[bool, IResolvable] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  machine_type: str = None,
  metadata: typing.Mapping[str] = None,
  network_interfaces: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupNetworkInterfaces]] = None,
  service_accounts: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupServiceAccounts]] = None,
  shielded_instance_config: WorkbenchInstanceGceSetupShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  vm_image: WorkbenchInstanceGceSetupVmImage = None
) -> None
```

###### `accelerator_configs`<sup>Optional</sup> <a name="accelerator_configs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.acceleratorConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

accelerator_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#accelerator_configs WorkbenchInstance#accelerator_configs}

---

###### `boot_disk`<sup>Optional</sup> <a name="boot_disk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.bootDisk"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#boot_disk WorkbenchInstance#boot_disk}

---

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#container_image WorkbenchInstance#container_image}

---

###### `data_disks`<sup>Optional</sup> <a name="data_disks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.dataDisks"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#data_disks WorkbenchInstance#data_disks}

---

###### `disable_public_ip`<sup>Optional</sup> <a name="disable_public_ip" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.disablePublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, no external IP will be assigned to this VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disable_public_ip WorkbenchInstance#disable_public_ip}

---

###### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.enableIpForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#enable_ip_forwarding WorkbenchInstance#enable_ip_forwarding}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.machineType"></a>

- *Type:* str

Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#machine_type WorkbenchInstance#machine_type}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Optional. Custom metadata to apply to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#metadata WorkbenchInstance#metadata}

---

###### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.networkInterfaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#network_interfaces WorkbenchInstance#network_interfaces}

---

###### `service_accounts`<sup>Optional</sup> <a name="service_accounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.serviceAccounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]]

service_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#service_accounts WorkbenchInstance#service_accounts}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#shielded_instance_config WorkbenchInstance#shielded_instance_config}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.tags"></a>

- *Type:* typing.List[str]

Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#tags WorkbenchInstance#tags}

---

###### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.vmImage"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#vm_image WorkbenchInstance#vm_image}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#create WorkbenchInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#delete WorkbenchInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#update WorkbenchInstance#update}.

---

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_disable_proxy_access` <a name="reset_disable_proxy_access" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDisableProxyAccess"></a>

```python
def reset_disable_proxy_access() -> None
```

##### `reset_gce_setup` <a name="reset_gce_setup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetGceSetup"></a>

```python
def reset_gce_setup() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_instance_owners` <a name="reset_instance_owners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceOwners"></a>

```python
def reset_instance_owners() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkbenchInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkbenchInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkbenchInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkbenchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkbenchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetup">gce_setup</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference">WorkbenchInstanceGceSetupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthInfo">health_info</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList">WorkbenchInstanceHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthState">health_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.proxyUri">proxy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference">WorkbenchInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.upgradeHistory">upgrade_history</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList">WorkbenchInstanceUpgradeHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccessInput">disable_proxy_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetupInput">gce_setup_input</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwnersInput">instance_owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccess">disable_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gce_setup`<sup>Required</sup> <a name="gce_setup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetup"></a>

```python
gce_setup: WorkbenchInstanceGceSetupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference">WorkbenchInstanceGceSetupOutputReference</a>

---

##### `health_info`<sup>Required</sup> <a name="health_info" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthInfo"></a>

```python
health_info: WorkbenchInstanceHealthInfoList
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList">WorkbenchInstanceHealthInfoList</a>

---

##### `health_state`<sup>Required</sup> <a name="health_state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthState"></a>

```python
health_state: str
```

- *Type:* str

---

##### `proxy_uri`<sup>Required</sup> <a name="proxy_uri" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.proxyUri"></a>

```python
proxy_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeouts"></a>

```python
timeouts: WorkbenchInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference">WorkbenchInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `upgrade_history`<sup>Required</sup> <a name="upgrade_history" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.upgradeHistory"></a>

```python
upgrade_history: WorkbenchInstanceUpgradeHistoryList
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList">WorkbenchInstanceUpgradeHistoryList</a>

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `disable_proxy_access_input`<sup>Optional</sup> <a name="disable_proxy_access_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccessInput"></a>

```python
disable_proxy_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gce_setup_input`<sup>Optional</sup> <a name="gce_setup_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetupInput"></a>

```python
gce_setup_input: WorkbenchInstanceGceSetup
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `instance_owners_input`<sup>Optional</sup> <a name="instance_owners_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwnersInput"></a>

```python
instance_owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WorkbenchInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>]

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `disable_proxy_access`<sup>Required</sup> <a name="disable_proxy_access" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccess"></a>

```python
disable_proxy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_owners`<sup>Required</sup> <a name="instance_owners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwners"></a>

```python
instance_owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkbenchInstanceConfig <a name="WorkbenchInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  desired_state: str = None,
  disable_proxy_access: typing.Union[bool, IResolvable] = None,
  gce_setup: WorkbenchInstanceGceSetup = None,
  id: str = None,
  instance_id: str = None,
  instance_owners: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: WorkbenchInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.name">name</a></code> | <code>str</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.disableProxyAccess">disable_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.gceSetup">gce_setup</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#id WorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | 'Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#project WorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#location WorkbenchInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#name WorkbenchInstance#name}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#desired_state WorkbenchInstance#desired_state}

---

##### `disable_proxy_access`<sup>Optional</sup> <a name="disable_proxy_access" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.disableProxyAccess"></a>

```python
disable_proxy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disable_proxy_access WorkbenchInstance#disable_proxy_access}

---

##### `gce_setup`<sup>Optional</sup> <a name="gce_setup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.gceSetup"></a>

```python
gce_setup: WorkbenchInstanceGceSetup
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#gce_setup WorkbenchInstance#gce_setup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#id WorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#instance_id WorkbenchInstance#instance_id}

---

##### `instance_owners`<sup>Optional</sup> <a name="instance_owners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceOwners"></a>

```python
instance_owners: typing.List[str]
```

- *Type:* typing.List[str]

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#instance_owners WorkbenchInstance#instance_owners}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#labels WorkbenchInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#project WorkbenchInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.timeouts"></a>

```python
timeouts: WorkbenchInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#timeouts WorkbenchInstance#timeouts}

---

### WorkbenchInstanceGceSetup <a name="WorkbenchInstanceGceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetup(
  accelerator_configs: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupAcceleratorConfigs]] = None,
  boot_disk: WorkbenchInstanceGceSetupBootDisk = None,
  container_image: WorkbenchInstanceGceSetupContainerImage = None,
  data_disks: WorkbenchInstanceGceSetupDataDisks = None,
  disable_public_ip: typing.Union[bool, IResolvable] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  machine_type: str = None,
  metadata: typing.Mapping[str] = None,
  network_interfaces: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupNetworkInterfaces]] = None,
  service_accounts: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupServiceAccounts]] = None,
  shielded_instance_config: WorkbenchInstanceGceSetupShieldedInstanceConfig = None,
  tags: typing.List[str] = None,
  vm_image: WorkbenchInstanceGceSetupVmImage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.acceleratorConfigs">accelerator_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]]</code> | accelerator_configs block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.bootDisk">boot_disk</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.dataDisks">data_disks</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | data_disks block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.disablePublicIp">disable_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If true, no external IP will be assigned to this VM instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.machineType">machine_type</a></code> | <code>str</code> | Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Optional. Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.serviceAccounts">service_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]]</code> | service_accounts block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.tags">tags</a></code> | <code>typing.List[str]</code> | Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | vm_image block. |

---

##### `accelerator_configs`<sup>Optional</sup> <a name="accelerator_configs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.acceleratorConfigs"></a>

```python
accelerator_configs: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupAcceleratorConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

accelerator_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#accelerator_configs WorkbenchInstance#accelerator_configs}

---

##### `boot_disk`<sup>Optional</sup> <a name="boot_disk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.bootDisk"></a>

```python
boot_disk: WorkbenchInstanceGceSetupBootDisk
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#boot_disk WorkbenchInstance#boot_disk}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.containerImage"></a>

```python
container_image: WorkbenchInstanceGceSetupContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#container_image WorkbenchInstance#container_image}

---

##### `data_disks`<sup>Optional</sup> <a name="data_disks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.dataDisks"></a>

```python
data_disks: WorkbenchInstanceGceSetupDataDisks
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#data_disks WorkbenchInstance#data_disks}

---

##### `disable_public_ip`<sup>Optional</sup> <a name="disable_public_ip" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.disablePublicIp"></a>

```python
disable_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, no external IP will be assigned to this VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disable_public_ip WorkbenchInstance#disable_public_ip}

---

##### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#enable_ip_forwarding WorkbenchInstance#enable_ip_forwarding}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#machine_type WorkbenchInstance#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Custom metadata to apply to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#metadata WorkbenchInstance#metadata}

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.networkInterfaces"></a>

```python
network_interfaces: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#network_interfaces WorkbenchInstance#network_interfaces}

---

##### `service_accounts`<sup>Optional</sup> <a name="service_accounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.serviceAccounts"></a>

```python
service_accounts: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupServiceAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]]

service_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#service_accounts WorkbenchInstance#service_accounts}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: WorkbenchInstanceGceSetupShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#shielded_instance_config WorkbenchInstance#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#tags WorkbenchInstance#tags}

---

##### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.vmImage"></a>

```python
vm_image: WorkbenchInstanceGceSetupVmImage
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#vm_image WorkbenchInstance#vm_image}

---

### WorkbenchInstanceGceSetupAcceleratorConfigs <a name="WorkbenchInstanceGceSetupAcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs(
  core_count: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount">core_count</a></code> | <code>str</code> | Optional. Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.type">type</a></code> | <code>str</code> | Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"]. |

---

##### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount"></a>

```python
core_count: str
```

- *Type:* str

Optional. Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#core_count WorkbenchInstance#core_count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#type WorkbenchInstance#type}

---

### WorkbenchInstanceGceSetupBootDisk <a name="WorkbenchInstanceGceSetupBootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupBootDisk(
  disk_encryption: str = None,
  disk_size_gb: str = None,
  disk_type: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskType">disk_type</a></code> | <code>str</code> | Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.kmsKey">kms_key</a></code> | <code>str</code> | 'Optional. |

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

Optional.

The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

'Optional.

The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}

---

### WorkbenchInstanceGceSetupContainerImage <a name="WorkbenchInstanceGceSetupContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupContainerImage(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#repository WorkbenchInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#tag WorkbenchInstance#tag}

---

### WorkbenchInstanceGceSetupDataDisks <a name="WorkbenchInstanceGceSetupDataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupDataDisks(
  disk_encryption: str = None,
  disk_size_gb: str = None,
  disk_type: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskType">disk_type</a></code> | <code>str</code> | Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.kmsKey">kms_key</a></code> | <code>str</code> | 'Optional. |

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

Optional.

The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

'Optional.

The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}

---

### WorkbenchInstanceGceSetupNetworkInterfaces <a name="WorkbenchInstanceGceSetupNetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces(
  network: str = None,
  nic_type: str = None,
  subnet: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.network">network</a></code> | <code>str</code> | Optional. The name of the VPC that this VM instance is in. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.nicType">nic_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.subnet">subnet</a></code> | <code>str</code> | Optional. The name of the subnet that this VM instance is in. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.network"></a>

```python
network: str
```

- *Type:* str

Optional. The name of the VPC that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#network WorkbenchInstance#network}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

Optional.

The type of vNIC to be used on this interface. This
may be gVNIC or VirtioNet. Possible values: ["VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#nic_type WorkbenchInstance#nic_type}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

Optional. The name of the subnet that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#subnet WorkbenchInstance#subnet}

---

### WorkbenchInstanceGceSetupServiceAccounts <a name="WorkbenchInstanceGceSetupServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts(
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.property.email">email</a></code> | <code>str</code> | Optional. Email address of the service account. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.property.email"></a>

```python
email: str
```

- *Type:* str

Optional. Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#email WorkbenchInstance#email}

---

### WorkbenchInstanceGceSetupShieldedInstanceConfig <a name="WorkbenchInstanceGceSetupShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#enable_integrity_monitoring WorkbenchInstance#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#enable_secure_boot WorkbenchInstance#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#enable_vtpm WorkbenchInstance#enable_vtpm}

---

### WorkbenchInstanceGceSetupVmImage <a name="WorkbenchInstanceGceSetupVmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupVmImage(
  family: str = None,
  name: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.family">family</a></code> | <code>str</code> | Optional. Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.name">name</a></code> | <code>str</code> | Optional. Use VM image name to find the image. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.project">project</a></code> | <code>str</code> | The name of the Google Cloud project that this VM image belongs to. Format: {project_id}. |

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.family"></a>

```python
family: str
```

- *Type:* str

Optional. Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#family WorkbenchInstance#family}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.name"></a>

```python
name: str
```

- *Type:* str

Optional. Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#name WorkbenchInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.project"></a>

```python
project: str
```

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#project WorkbenchInstance#project}

---

### WorkbenchInstanceHealthInfo <a name="WorkbenchInstanceHealthInfo" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceHealthInfo()
```


### WorkbenchInstanceTimeouts <a name="WorkbenchInstanceTimeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#create WorkbenchInstance#create}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#delete WorkbenchInstance#delete}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#update WorkbenchInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#create WorkbenchInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#delete WorkbenchInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#update WorkbenchInstance#update}.

---

### WorkbenchInstanceUpgradeHistory <a name="WorkbenchInstanceUpgradeHistory" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceUpgradeHistory()
```


## Classes <a name="Classes" id="Classes"></a>

### WorkbenchInstanceGceSetupAcceleratorConfigsList <a name="WorkbenchInstanceGceSetupAcceleratorConfigsList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupAcceleratorConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

---


### WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference <a name="WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount">reset_core_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_core_count` <a name="reset_core_count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount"></a>

```python
def reset_core_count() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput">core_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount">core_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput"></a>

```python
core_count_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount"></a>

```python
core_count: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkbenchInstanceGceSetupAcceleratorConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]

---


### WorkbenchInstanceGceSetupBootDiskOutputReference <a name="WorkbenchInstanceGceSetupBootDiskOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput"></a>

```python
disk_encryption_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue"></a>

```python
internal_value: WorkbenchInstanceGceSetupBootDisk
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

---


### WorkbenchInstanceGceSetupContainerImageOutputReference <a name="WorkbenchInstanceGceSetupContainerImageOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: WorkbenchInstanceGceSetupContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

---


### WorkbenchInstanceGceSetupDataDisksOutputReference <a name="WorkbenchInstanceGceSetupDataDisksOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput"></a>

```python
disk_encryption_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue"></a>

```python
internal_value: WorkbenchInstanceGceSetupDataDisks
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

---


### WorkbenchInstanceGceSetupNetworkInterfacesList <a name="WorkbenchInstanceGceSetupNetworkInterfacesList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkbenchInstanceGceSetupNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]]

---


### WorkbenchInstanceGceSetupNetworkInterfacesOutputReference <a name="WorkbenchInstanceGceSetupNetworkInterfacesOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType">reset_nic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet">reset_subnet</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_nic_type` <a name="reset_nic_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType"></a>

```python
def reset_nic_type() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet"></a>

```python
def reset_subnet() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput">nic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `nic_type_input`<sup>Optional</sup> <a name="nic_type_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput"></a>

```python
nic_type_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkbenchInstanceGceSetupNetworkInterfaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]

---


### WorkbenchInstanceGceSetupOutputReference <a name="WorkbenchInstanceGceSetupOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs">put_accelerator_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk">put_boot_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks">put_data_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts">put_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage">put_vm_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs">reset_accelerator_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetBootDisk">reset_boot_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDataDisks">reset_data_disks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp">reset_disable_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding">reset_enable_ip_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetServiceAccounts">reset_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetVmImage">reset_vm_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_configs` <a name="put_accelerator_configs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs"></a>

```python
def put_accelerator_configs(
  value: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupAcceleratorConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

---

##### `put_boot_disk` <a name="put_boot_disk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk"></a>

```python
def put_boot_disk(
  disk_encryption: str = None,
  disk_size_gb: str = None,
  disk_type: str = None,
  kms_key: str = None
) -> None
```

###### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.diskEncryption"></a>

- *Type:* str

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.diskSizeGb"></a>

- *Type:* str

Optional.

The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.diskType"></a>

- *Type:* str

Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.kmsKey"></a>

- *Type:* str

'Optional.

The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage"></a>

```python
def put_container_image(
  repository: str,
  tag: str = None
) -> None
```

###### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage.parameter.repository"></a>

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#repository WorkbenchInstance#repository}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage.parameter.tag"></a>

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#tag WorkbenchInstance#tag}

---

##### `put_data_disks` <a name="put_data_disks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks"></a>

```python
def put_data_disks(
  disk_encryption: str = None,
  disk_size_gb: str = None,
  disk_type: str = None,
  kms_key: str = None
) -> None
```

###### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.diskEncryption"></a>

- *Type:* str

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.diskSizeGb"></a>

- *Type:* str

Optional.

The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.diskType"></a>

- *Type:* str

Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.kmsKey"></a>

- *Type:* str

'Optional.

The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}

---

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupNetworkInterfaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]]

---

##### `put_service_accounts` <a name="put_service_accounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts"></a>

```python
def put_service_accounts(
  value: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupServiceAccounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]]

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#enable_integrity_monitoring WorkbenchInstance#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#enable_secure_boot WorkbenchInstance#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#enable_vtpm WorkbenchInstance#enable_vtpm}

---

##### `put_vm_image` <a name="put_vm_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage"></a>

```python
def put_vm_image(
  family: str = None,
  name: str = None,
  project: str = None
) -> None
```

###### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.family"></a>

- *Type:* str

Optional. Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#family WorkbenchInstance#family}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.name"></a>

- *Type:* str

Optional. Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#name WorkbenchInstance#name}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.project"></a>

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/workbench_instance#project WorkbenchInstance#project}

---

##### `reset_accelerator_configs` <a name="reset_accelerator_configs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs"></a>

```python
def reset_accelerator_configs() -> None
```

##### `reset_boot_disk` <a name="reset_boot_disk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetBootDisk"></a>

```python
def reset_boot_disk() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_data_disks` <a name="reset_data_disks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDataDisks"></a>

```python
def reset_data_disks() -> None
```

##### `reset_disable_public_ip` <a name="reset_disable_public_ip" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp"></a>

```python
def reset_disable_public_ip() -> None
```

##### `reset_enable_ip_forwarding` <a name="reset_enable_ip_forwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding"></a>

```python
def reset_enable_ip_forwarding() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```

##### `reset_service_accounts` <a name="reset_service_accounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetServiceAccounts"></a>

```python
def reset_service_accounts() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vm_image` <a name="reset_vm_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetVmImage"></a>

```python
def reset_vm_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs">accelerator_configs</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList">WorkbenchInstanceGceSetupAcceleratorConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDisk">boot_disk</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference">WorkbenchInstanceGceSetupBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference">WorkbenchInstanceGceSetupContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisks">data_disks</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference">WorkbenchInstanceGceSetupDataDisksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList">WorkbenchInstanceGceSetupNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccounts">service_accounts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList">WorkbenchInstanceGceSetupServiceAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference">WorkbenchInstanceGceSetupVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput">accelerator_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDiskInput">boot_disk_input</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisksInput">data_disks_input</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput">disable_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput">enable_ip_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput">service_accounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImageInput">vm_image_input</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIp">disable_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_configs`<sup>Required</sup> <a name="accelerator_configs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs"></a>

```python
accelerator_configs: WorkbenchInstanceGceSetupAcceleratorConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList">WorkbenchInstanceGceSetupAcceleratorConfigsList</a>

---

##### `boot_disk`<sup>Required</sup> <a name="boot_disk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDisk"></a>

```python
boot_disk: WorkbenchInstanceGceSetupBootDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference">WorkbenchInstanceGceSetupBootDiskOutputReference</a>

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImage"></a>

```python
container_image: WorkbenchInstanceGceSetupContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference">WorkbenchInstanceGceSetupContainerImageOutputReference</a>

---

##### `data_disks`<sup>Required</sup> <a name="data_disks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisks"></a>

```python
data_disks: WorkbenchInstanceGceSetupDataDisksOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference">WorkbenchInstanceGceSetupDataDisksOutputReference</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: WorkbenchInstanceGceSetupNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList">WorkbenchInstanceGceSetupNetworkInterfacesList</a>

---

##### `service_accounts`<sup>Required</sup> <a name="service_accounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccounts"></a>

```python
service_accounts: WorkbenchInstanceGceSetupServiceAccountsList
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList">WorkbenchInstanceGceSetupServiceAccountsList</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a>

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImage"></a>

```python
vm_image: WorkbenchInstanceGceSetupVmImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference">WorkbenchInstanceGceSetupVmImageOutputReference</a>

---

##### `accelerator_configs_input`<sup>Optional</sup> <a name="accelerator_configs_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput"></a>

```python
accelerator_configs_input: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupAcceleratorConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs">WorkbenchInstanceGceSetupAcceleratorConfigs</a>]]

---

##### `boot_disk_input`<sup>Optional</sup> <a name="boot_disk_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDiskInput"></a>

```python
boot_disk_input: WorkbenchInstanceGceSetupBootDisk
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImageInput"></a>

```python
container_image_input: WorkbenchInstanceGceSetupContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

---

##### `data_disks_input`<sup>Optional</sup> <a name="data_disks_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisksInput"></a>

```python
data_disks_input: WorkbenchInstanceGceSetupDataDisks
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

---

##### `disable_public_ip_input`<sup>Optional</sup> <a name="disable_public_ip_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput"></a>

```python
disable_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding_input`<sup>Optional</sup> <a name="enable_ip_forwarding_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput"></a>

```python
enable_ip_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput"></a>

```python
network_interfaces_input: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces">WorkbenchInstanceGceSetupNetworkInterfaces</a>]]

---

##### `service_accounts_input`<sup>Optional</sup> <a name="service_accounts_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput"></a>

```python
service_accounts_input: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupServiceAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]]

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: WorkbenchInstanceGceSetupShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vm_image_input`<sup>Optional</sup> <a name="vm_image_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImageInput"></a>

```python
vm_image_input: WorkbenchInstanceGceSetupVmImage
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

---

##### `disable_public_ip`<sup>Required</sup> <a name="disable_public_ip" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIp"></a>

```python
disable_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding`<sup>Required</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.internalValue"></a>

```python
internal_value: WorkbenchInstanceGceSetup
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

---


### WorkbenchInstanceGceSetupServiceAccountsList <a name="WorkbenchInstanceGceSetupServiceAccountsList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkbenchInstanceGceSetupServiceAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkbenchInstanceGceSetupServiceAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]]

---


### WorkbenchInstanceGceSetupServiceAccountsOutputReference <a name="WorkbenchInstanceGceSetupServiceAccountsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkbenchInstanceGceSetupServiceAccounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts">WorkbenchInstanceGceSetupServiceAccounts</a>]

---


### WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference <a name="WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: WorkbenchInstanceGceSetupShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---


### WorkbenchInstanceGceSetupVmImageOutputReference <a name="WorkbenchInstanceGceSetupVmImageOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetFamily">reset_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_family` <a name="reset_family" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetFamily"></a>

```python
def reset_family() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue"></a>

```python
internal_value: WorkbenchInstanceGceSetupVmImage
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

---


### WorkbenchInstanceHealthInfoList <a name="WorkbenchInstanceHealthInfoList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceHealthInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkbenchInstanceHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkbenchInstanceHealthInfoOutputReference <a name="WorkbenchInstanceHealthInfoOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceHealthInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo">WorkbenchInstanceHealthInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.internalValue"></a>

```python
internal_value: WorkbenchInstanceHealthInfo
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo">WorkbenchInstanceHealthInfo</a>

---


### WorkbenchInstanceTimeoutsOutputReference <a name="WorkbenchInstanceTimeoutsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkbenchInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>]

---


### WorkbenchInstanceUpgradeHistoryList <a name="WorkbenchInstanceUpgradeHistoryList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceUpgradeHistoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkbenchInstanceUpgradeHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkbenchInstanceUpgradeHistoryOutputReference <a name="WorkbenchInstanceUpgradeHistoryOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workbench_instance

workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage">container_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot">snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage">vm_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory">WorkbenchInstanceUpgradeHistory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage"></a>

```python
vm_image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue"></a>

```python
internal_value: WorkbenchInstanceUpgradeHistory
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory">WorkbenchInstanceUpgradeHistory</a>

---



