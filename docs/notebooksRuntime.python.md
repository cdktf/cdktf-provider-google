# `google_notebooks_runtime`

Refer to the Terraform Registory for docs: [`google_notebooks_runtime`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime).

# `notebooksRuntime` Submodule <a name="`notebooksRuntime` Submodule" id="@cdktf/provider-google.notebooksRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksRuntime <a name="NotebooksRuntime" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime google_notebooks_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntime(
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
  access_config: NotebooksRuntimeAccessConfig = None,
  id: str = None,
  project: str = None,
  software_config: NotebooksRuntimeSoftwareConfig = None,
  timeouts: NotebooksRuntimeTimeouts = None,
  virtual_machine: NotebooksRuntimeVirtualMachine = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.name">name</a></code> | <code>str</code> | The name specified for the Notebook runtime. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#id NotebooksRuntime#id}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#project NotebooksRuntime#project}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a></code> | virtual_machine block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.location"></a>

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#location NotebooksRuntime#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.name"></a>

- *Type:* str

The name specified for the Notebook runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#name NotebooksRuntime#name}

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.accessConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#access_config NotebooksRuntime#access_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#id NotebooksRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#project NotebooksRuntime#project}.

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.softwareConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#software_config NotebooksRuntime#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#timeouts NotebooksRuntime#timeouts}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.Initializer.parameter.virtualMachine"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#virtual_machine NotebooksRuntime#virtual_machine}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putAccessConfig">put_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig">put_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putVirtualMachine">put_virtual_machine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetAccessConfig">reset_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetSoftwareConfig">reset_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetVirtualMachine">reset_virtual_machine</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_access_config` <a name="put_access_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putAccessConfig"></a>

```python
def put_access_config(
  access_type: str = None,
  runtime_owner: str = None
) -> None
```

###### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putAccessConfig.parameter.accessType"></a>

- *Type:* str

The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#access_type NotebooksRuntime#access_type}

---

###### `runtime_owner`<sup>Optional</sup> <a name="runtime_owner" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putAccessConfig.parameter.runtimeOwner"></a>

- *Type:* str

The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#runtime_owner NotebooksRuntime#runtime_owner}

---

##### `put_software_config` <a name="put_software_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig"></a>

```python
def put_software_config(
  custom_gpu_driver_path: str = None,
  enable_health_monitoring: typing.Union[bool, IResolvable] = None,
  idle_shutdown: typing.Union[bool, IResolvable] = None,
  idle_shutdown_timeout: typing.Union[int, float] = None,
  install_gpu_driver: typing.Union[bool, IResolvable] = None,
  kernels: typing.Union[IResolvable, typing.List[NotebooksRuntimeSoftwareConfigKernels]] = None,
  notebook_upgrade_schedule: str = None,
  post_startup_script: str = None,
  post_startup_script_behavior: str = None
) -> None
```

###### `custom_gpu_driver_path`<sup>Optional</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.customGpuDriverPath"></a>

- *Type:* str

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#custom_gpu_driver_path NotebooksRuntime#custom_gpu_driver_path}

---

###### `enable_health_monitoring`<sup>Optional</sup> <a name="enable_health_monitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.enableHealthMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verifies core internal services are running. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#enable_health_monitoring NotebooksRuntime#enable_health_monitoring}

---

###### `idle_shutdown`<sup>Optional</sup> <a name="idle_shutdown" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.idleShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Runtime will automatically shutdown after idle_shutdown_time. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#idle_shutdown NotebooksRuntime#idle_shutdown}

---

###### `idle_shutdown_timeout`<sup>Optional</sup> <a name="idle_shutdown_timeout" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.idleShutdownTimeout"></a>

- *Type:* typing.Union[int, float]

Time in minutes to wait before shuting down runtime. Default: 180 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#idle_shutdown_timeout NotebooksRuntime#idle_shutdown_timeout}

---

###### `install_gpu_driver`<sup>Optional</sup> <a name="install_gpu_driver" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.installGpuDriver"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Install Nvidia Driver automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#install_gpu_driver NotebooksRuntime#install_gpu_driver}

---

###### `kernels`<sup>Optional</sup> <a name="kernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.kernels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]]

kernels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#kernels NotebooksRuntime#kernels}

---

###### `notebook_upgrade_schedule`<sup>Optional</sup> <a name="notebook_upgrade_schedule" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.notebookUpgradeSchedule"></a>

- *Type:* str

Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#notebook_upgrade_schedule NotebooksRuntime#notebook_upgrade_schedule}

---

###### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.postStartupScript"></a>

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#post_startup_script NotebooksRuntime#post_startup_script}

---

###### `post_startup_script_behavior`<sup>Optional</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putSoftwareConfig.parameter.postStartupScriptBehavior"></a>

- *Type:* str

Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#post_startup_script_behavior NotebooksRuntime#post_startup_script_behavior}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#create NotebooksRuntime#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#delete NotebooksRuntime#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#update NotebooksRuntime#update}.

---

##### `put_virtual_machine` <a name="put_virtual_machine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putVirtualMachine"></a>

```python
def put_virtual_machine(
  virtual_machine_config: NotebooksRuntimeVirtualMachineVirtualMachineConfig = None
) -> None
```

###### `virtual_machine_config`<sup>Optional</sup> <a name="virtual_machine_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.putVirtualMachine.parameter.virtualMachineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

virtual_machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#virtual_machine_config NotebooksRuntime#virtual_machine_config}

---

##### `reset_access_config` <a name="reset_access_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetAccessConfig"></a>

```python
def reset_access_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_software_config` <a name="reset_software_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetSoftwareConfig"></a>

```python
def reset_software_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_machine` <a name="reset_virtual_machine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.resetVirtualMachine"></a>

```python
def reset_virtual_machine() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference">NotebooksRuntimeAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.healthState">health_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList">NotebooksRuntimeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference">NotebooksRuntimeSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference">NotebooksRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference">NotebooksRuntimeVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.accessConfigInput">access_config_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.softwareConfigInput">software_config_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.virtualMachineInput">virtual_machine_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.accessConfig"></a>

```python
access_config: NotebooksRuntimeAccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference">NotebooksRuntimeAccessConfigOutputReference</a>

---

##### `health_state`<sup>Required</sup> <a name="health_state" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.healthState"></a>

```python
health_state: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.metrics"></a>

```python
metrics: NotebooksRuntimeMetricsList
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList">NotebooksRuntimeMetricsList</a>

---

##### `software_config`<sup>Required</sup> <a name="software_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.softwareConfig"></a>

```python
software_config: NotebooksRuntimeSoftwareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference">NotebooksRuntimeSoftwareConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.timeouts"></a>

```python
timeouts: NotebooksRuntimeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference">NotebooksRuntimeTimeoutsOutputReference</a>

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.virtualMachine"></a>

```python
virtual_machine: NotebooksRuntimeVirtualMachineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference">NotebooksRuntimeVirtualMachineOutputReference</a>

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.accessConfigInput"></a>

```python
access_config_input: NotebooksRuntimeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `software_config_input`<sup>Optional</sup> <a name="software_config_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.softwareConfigInput"></a>

```python
software_config_input: NotebooksRuntimeSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NotebooksRuntimeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a>]

---

##### `virtual_machine_input`<sup>Optional</sup> <a name="virtual_machine_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.virtualMachineInput"></a>

```python
virtual_machine_input: NotebooksRuntimeVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksRuntimeAccessConfig <a name="NotebooksRuntimeAccessConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeAccessConfig(
  access_type: str = None,
  runtime_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.property.accessType">access_type</a></code> | <code>str</code> | The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.property.runtimeOwner">runtime_owner</a></code> | <code>str</code> | The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only. |

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#access_type NotebooksRuntime#access_type}

---

##### `runtime_owner`<sup>Optional</sup> <a name="runtime_owner" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig.property.runtimeOwner"></a>

```python
runtime_owner: str
```

- *Type:* str

The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#runtime_owner NotebooksRuntime#runtime_owner}

---

### NotebooksRuntimeConfig <a name="NotebooksRuntimeConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  access_config: NotebooksRuntimeAccessConfig = None,
  id: str = None,
  project: str = None,
  software_config: NotebooksRuntimeSoftwareConfig = None,
  timeouts: NotebooksRuntimeTimeouts = None,
  virtual_machine: NotebooksRuntimeVirtualMachine = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.name">name</a></code> | <code>str</code> | The name specified for the Notebook runtime. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#id NotebooksRuntime#id}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#project NotebooksRuntime#project}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a></code> | virtual_machine block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#location NotebooksRuntime#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the Notebook runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#name NotebooksRuntime#name}

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.accessConfig"></a>

```python
access_config: NotebooksRuntimeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#access_config NotebooksRuntime#access_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#id NotebooksRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#project NotebooksRuntime#project}.

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.softwareConfig"></a>

```python
software_config: NotebooksRuntimeSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#software_config NotebooksRuntime#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.timeouts"></a>

```python
timeouts: NotebooksRuntimeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#timeouts NotebooksRuntime#timeouts}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeConfig.property.virtualMachine"></a>

```python
virtual_machine: NotebooksRuntimeVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#virtual_machine NotebooksRuntime#virtual_machine}

---

### NotebooksRuntimeMetrics <a name="NotebooksRuntimeMetrics" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeMetrics()
```


### NotebooksRuntimeSoftwareConfig <a name="NotebooksRuntimeSoftwareConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeSoftwareConfig(
  custom_gpu_driver_path: str = None,
  enable_health_monitoring: typing.Union[bool, IResolvable] = None,
  idle_shutdown: typing.Union[bool, IResolvable] = None,
  idle_shutdown_timeout: typing.Union[int, float] = None,
  install_gpu_driver: typing.Union[bool, IResolvable] = None,
  kernels: typing.Union[IResolvable, typing.List[NotebooksRuntimeSoftwareConfigKernels]] = None,
  notebook_upgrade_schedule: str = None,
  post_startup_script: str = None,
  post_startup_script_behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.enableHealthMonitoring">enable_health_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Verifies core internal services are running. Default: True. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.idleShutdown">idle_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Runtime will automatically shutdown after idle_shutdown_time. Default: True. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.idleShutdownTimeout">idle_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Time in minutes to wait before shuting down runtime. Default: 180 minutes. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Install Nvidia Driver automatically. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.kernels">kernels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]]</code> | kernels block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.notebookUpgradeSchedule">notebook_upgrade_schedule</a></code> | <code>str</code> | Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.postStartupScriptBehavior">post_startup_script_behavior</a></code> | <code>str</code> | Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |

---

##### `custom_gpu_driver_path`<sup>Optional</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.customGpuDriverPath"></a>

```python
custom_gpu_driver_path: str
```

- *Type:* str

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#custom_gpu_driver_path NotebooksRuntime#custom_gpu_driver_path}

---

##### `enable_health_monitoring`<sup>Optional</sup> <a name="enable_health_monitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.enableHealthMonitoring"></a>

```python
enable_health_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verifies core internal services are running. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#enable_health_monitoring NotebooksRuntime#enable_health_monitoring}

---

##### `idle_shutdown`<sup>Optional</sup> <a name="idle_shutdown" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.idleShutdown"></a>

```python
idle_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Runtime will automatically shutdown after idle_shutdown_time. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#idle_shutdown NotebooksRuntime#idle_shutdown}

---

##### `idle_shutdown_timeout`<sup>Optional</sup> <a name="idle_shutdown_timeout" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.idleShutdownTimeout"></a>

```python
idle_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in minutes to wait before shuting down runtime. Default: 180 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#idle_shutdown_timeout NotebooksRuntime#idle_shutdown_timeout}

---

##### `install_gpu_driver`<sup>Optional</sup> <a name="install_gpu_driver" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.installGpuDriver"></a>

```python
install_gpu_driver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Install Nvidia Driver automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#install_gpu_driver NotebooksRuntime#install_gpu_driver}

---

##### `kernels`<sup>Optional</sup> <a name="kernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.kernels"></a>

```python
kernels: typing.Union[IResolvable, typing.List[NotebooksRuntimeSoftwareConfigKernels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]]

kernels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#kernels NotebooksRuntime#kernels}

---

##### `notebook_upgrade_schedule`<sup>Optional</sup> <a name="notebook_upgrade_schedule" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.notebookUpgradeSchedule"></a>

```python
notebook_upgrade_schedule: str
```

- *Type:* str

Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#notebook_upgrade_schedule NotebooksRuntime#notebook_upgrade_schedule}

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#post_startup_script NotebooksRuntime#post_startup_script}

---

##### `post_startup_script_behavior`<sup>Optional</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig.property.postStartupScriptBehavior"></a>

```python
post_startup_script_behavior: str
```

- *Type:* str

Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#post_startup_script_behavior NotebooksRuntime#post_startup_script_behavior}

---

### NotebooksRuntimeSoftwareConfigKernels <a name="NotebooksRuntimeSoftwareConfigKernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#repository NotebooksRuntime#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#tag NotebooksRuntime#tag}

---

### NotebooksRuntimeTimeouts <a name="NotebooksRuntimeTimeouts" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#create NotebooksRuntime#create}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#delete NotebooksRuntime#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#update NotebooksRuntime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#create NotebooksRuntime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#delete NotebooksRuntime#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#update NotebooksRuntime#update}.

---

### NotebooksRuntimeVirtualMachine <a name="NotebooksRuntimeVirtualMachine" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachine(
  virtual_machine_config: NotebooksRuntimeVirtualMachineVirtualMachineConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine.property.virtualMachineConfig">virtual_machine_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | virtual_machine_config block. |

---

##### `virtual_machine_config`<sup>Optional</sup> <a name="virtual_machine_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine.property.virtualMachineConfig"></a>

```python
virtual_machine_config: NotebooksRuntimeVirtualMachineVirtualMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

virtual_machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#virtual_machine_config NotebooksRuntime#virtual_machine_config}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfig <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig(
  data_disk: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk,
  machine_type: str,
  accelerator_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig = None,
  container_images: typing.Union[IResolvable, typing.List[NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]] = None,
  encryption_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig = None,
  internal_ip_only: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  nic_type: str = None,
  reserved_ip_range: str = None,
  shielded_instance_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig = None,
  subnet: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.dataDisk">data_disk</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | data_disk block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.machineType">machine_type</a></code> | <code>str</code> | The Compute Engine machine type used for runtimes. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.containerImages">container_images</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]</code> | container_images block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.internalIpOnly">internal_ip_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, runtime will only have internal IP addresses. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this runtime. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)). |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.network">network</a></code> | <code>str</code> | The Compute Engine network to be used for machine communications. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.nicType">nic_type</a></code> | <code>str</code> | The type of vNIC to be used on this interface. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.subnet">subnet</a></code> | <code>str</code> | The Compute Engine subnetwork to be used for machine communications. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)). |

---

##### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.dataDisk"></a>

```python
data_disk: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#data_disk NotebooksRuntime#data_disk}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The Compute Engine machine type used for runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#machine_type NotebooksRuntime#machine_type}

---

##### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.acceleratorConfig"></a>

```python
accelerator_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#accelerator_config NotebooksRuntime#accelerator_config}

---

##### `container_images`<sup>Optional</sup> <a name="container_images" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.containerImages"></a>

```python
container_images: typing.Union[IResolvable, typing.List[NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

container_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#container_images NotebooksRuntime#container_images}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.encryptionConfig"></a>

```python
encryption_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#encryption_config NotebooksRuntime#encryption_config}

---

##### `internal_ip_only`<sup>Optional</sup> <a name="internal_ip_only" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.internalIpOnly"></a>

```python
internal_ip_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, runtime will only have internal IP addresses.

By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
'internal_ip_only' restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#internal_ip_only NotebooksRuntime#internal_ip_only}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#labels NotebooksRuntime#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#metadata NotebooksRuntime#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The Compute Engine network to be used for machine communications.

Cannot be specified with subnetwork. If neither 'network' nor
'subnet' is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:
'https://www.googleapis.com/compute/v1/projects/[project_id]/
regions/global/default'
'projects/[project_id]/regions/global/default'
Runtimes are managed resources inside Google Infrastructure.
Runtimes support the following network configurations:
Google Managed Network (Network & subnet are empty)
Consumer Project VPC (network & subnet are required). Requires
configuring Private Service Access.
Shared VPC (network & subnet are required). Requires
configuring Private Service Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#network NotebooksRuntime#network}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

The type of vNIC to be used on this interface.

This may be gVNIC
or VirtioNet. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#nic_type NotebooksRuntime#nic_type}

---

##### `reserved_ip_range`<sup>Optional</sup> <a name="reserved_ip_range" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.reservedIpRange"></a>

```python
reserved_ip_range: str
```

- *Type:* str

Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#reserved_ip_range NotebooksRuntime#reserved_ip_range}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#shielded_instance_config NotebooksRuntime#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

The Compute Engine subnetwork to be used for machine communications.

Cannot be specified with network. A full URL or
partial URI are valid. Examples:
'https://www.googleapis.com/compute/v1/projects/[project_id]/
regions/us-east1/subnetworks/sub0'
'projects/[project_id]/regions/us-east1/subnetworks/sub0'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#subnet NotebooksRuntime#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#tags NotebooksRuntime#tags}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig(
  core_count: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.type">type</a></code> | <code>str</code> | Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'. |

---

##### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#core_count NotebooksRuntime#core_count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#type NotebooksRuntime#type}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#repository NotebooksRuntime#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#tag NotebooksRuntime#tag}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk(
  initialize_params: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams = None,
  interface: str = None,
  mode: str = None,
  source: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.initializeParams">initialize_params</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.interface">interface</a></code> | <code>str</code> | "Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.mode">mode</a></code> | <code>str</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.source">source</a></code> | <code>str</code> | Specifies a valid partial or full URL to an existing Persistent Disk resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.type">type</a></code> | <code>str</code> | Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT. |

---

##### `initialize_params`<sup>Optional</sup> <a name="initialize_params" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.initializeParams"></a>

```python
initialize_params: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#initialize_params NotebooksRuntime#initialize_params}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.interface"></a>

```python
interface: str
```

- *Type:* str

"Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: * NVME * SCSI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#interface NotebooksRuntime#interface}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach
the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#mode NotebooksRuntime#mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.source"></a>

```python
source: str
```

- *Type:* str

Specifies a valid partial or full URL to an existing Persistent Disk resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#source NotebooksRuntime#source}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#type NotebooksRuntime#type}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams(
  description: str = None,
  disk_name: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.description">description</a></code> | <code>str</code> | Provide this property when creating the disk. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskName">disk_name</a></code> | <code>str</code> | Specifies the disk name. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskType">disk_type</a></code> | <code>str</code> | The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.description"></a>

```python
description: str
```

- *Type:* str

Provide this property when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#description NotebooksRuntime#description}

---

##### `disk_name`<sup>Optional</sup> <a name="disk_name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

Specifies the disk name.

If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#disk_name NotebooksRuntime#disk_name}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the size of the disk in base-2 GB.

If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#disk_size_gb NotebooksRuntime#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#disk_type NotebooksRuntime#disk_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this disk.

These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#labels NotebooksRuntime#labels}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks.

It has the following format:
'projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#kms_key NotebooksRuntime#kms_key}

---

### NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#enable_integrity_monitoring NotebooksRuntime#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#enable_secure_boot NotebooksRuntime#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#enable_vtpm NotebooksRuntime#enable_vtpm}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksRuntimeAccessConfigOutputReference <a name="NotebooksRuntimeAccessConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resetRuntimeOwner">reset_runtime_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_type` <a name="reset_access_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_runtime_owner` <a name="reset_runtime_owner" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.resetRuntimeOwner"></a>

```python
def reset_runtime_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.proxyUri">proxy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.runtimeOwnerInput">runtime_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.runtimeOwner">runtime_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proxy_uri`<sup>Required</sup> <a name="proxy_uri" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.proxyUri"></a>

```python
proxy_uri: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `runtime_owner_input`<sup>Optional</sup> <a name="runtime_owner_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.runtimeOwnerInput"></a>

```python
runtime_owner_input: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `runtime_owner`<sup>Required</sup> <a name="runtime_owner" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.runtimeOwner"></a>

```python
runtime_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeAccessConfig">NotebooksRuntimeAccessConfig</a>

---


### NotebooksRuntimeMetricsList <a name="NotebooksRuntimeMetricsList" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotebooksRuntimeMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NotebooksRuntimeMetricsOutputReference <a name="NotebooksRuntimeMetricsOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.systemMetrics">system_metrics</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetrics">NotebooksRuntimeMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_metrics`<sup>Required</sup> <a name="system_metrics" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.systemMetrics"></a>

```python
system_metrics: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetricsOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeMetrics
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeMetrics">NotebooksRuntimeMetrics</a>

---


### NotebooksRuntimeSoftwareConfigKernelsList <a name="NotebooksRuntimeSoftwareConfigKernelsList" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotebooksRuntimeSoftwareConfigKernelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotebooksRuntimeSoftwareConfigKernels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]]

---


### NotebooksRuntimeSoftwareConfigKernelsOutputReference <a name="NotebooksRuntimeSoftwareConfigKernelsOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotebooksRuntimeSoftwareConfigKernels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]

---


### NotebooksRuntimeSoftwareConfigOutputReference <a name="NotebooksRuntimeSoftwareConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.putKernels">put_kernels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetCustomGpuDriverPath">reset_custom_gpu_driver_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetEnableHealthMonitoring">reset_enable_health_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdown">reset_idle_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdownTimeout">reset_idle_shutdown_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetInstallGpuDriver">reset_install_gpu_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetKernels">reset_kernels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetNotebookUpgradeSchedule">reset_notebook_upgrade_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScript">reset_post_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScriptBehavior">reset_post_startup_script_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kernels` <a name="put_kernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.putKernels"></a>

```python
def put_kernels(
  value: typing.Union[IResolvable, typing.List[NotebooksRuntimeSoftwareConfigKernels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.putKernels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]]

---

##### `reset_custom_gpu_driver_path` <a name="reset_custom_gpu_driver_path" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetCustomGpuDriverPath"></a>

```python
def reset_custom_gpu_driver_path() -> None
```

##### `reset_enable_health_monitoring` <a name="reset_enable_health_monitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetEnableHealthMonitoring"></a>

```python
def reset_enable_health_monitoring() -> None
```

##### `reset_idle_shutdown` <a name="reset_idle_shutdown" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdown"></a>

```python
def reset_idle_shutdown() -> None
```

##### `reset_idle_shutdown_timeout` <a name="reset_idle_shutdown_timeout" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdownTimeout"></a>

```python
def reset_idle_shutdown_timeout() -> None
```

##### `reset_install_gpu_driver` <a name="reset_install_gpu_driver" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetInstallGpuDriver"></a>

```python
def reset_install_gpu_driver() -> None
```

##### `reset_kernels` <a name="reset_kernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetKernels"></a>

```python
def reset_kernels() -> None
```

##### `reset_notebook_upgrade_schedule` <a name="reset_notebook_upgrade_schedule" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetNotebookUpgradeSchedule"></a>

```python
def reset_notebook_upgrade_schedule() -> None
```

##### `reset_post_startup_script` <a name="reset_post_startup_script" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScript"></a>

```python
def reset_post_startup_script() -> None
```

##### `reset_post_startup_script_behavior` <a name="reset_post_startup_script_behavior" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScriptBehavior"></a>

```python
def reset_post_startup_script_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.kernels">kernels</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList">NotebooksRuntimeSoftwareConfigKernelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.upgradeable">upgradeable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPathInput">custom_gpu_driver_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoringInput">enable_health_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownInput">idle_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeoutInput">idle_shutdown_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriverInput">install_gpu_driver_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.kernelsInput">kernels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeScheduleInput">notebook_upgrade_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehaviorInput">post_startup_script_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptInput">post_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoring">enable_health_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdown">idle_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeout">idle_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeSchedule">notebook_upgrade_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehavior">post_startup_script_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kernels`<sup>Required</sup> <a name="kernels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.kernels"></a>

```python
kernels: NotebooksRuntimeSoftwareConfigKernelsList
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernelsList">NotebooksRuntimeSoftwareConfigKernelsList</a>

---

##### `upgradeable`<sup>Required</sup> <a name="upgradeable" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.upgradeable"></a>

```python
upgradeable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `custom_gpu_driver_path_input`<sup>Optional</sup> <a name="custom_gpu_driver_path_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPathInput"></a>

```python
custom_gpu_driver_path_input: str
```

- *Type:* str

---

##### `enable_health_monitoring_input`<sup>Optional</sup> <a name="enable_health_monitoring_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoringInput"></a>

```python
enable_health_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_shutdown_input`<sup>Optional</sup> <a name="idle_shutdown_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownInput"></a>

```python
idle_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_shutdown_timeout_input`<sup>Optional</sup> <a name="idle_shutdown_timeout_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeoutInput"></a>

```python
idle_shutdown_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `install_gpu_driver_input`<sup>Optional</sup> <a name="install_gpu_driver_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriverInput"></a>

```python
install_gpu_driver_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kernels_input`<sup>Optional</sup> <a name="kernels_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.kernelsInput"></a>

```python
kernels_input: typing.Union[IResolvable, typing.List[NotebooksRuntimeSoftwareConfigKernels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigKernels">NotebooksRuntimeSoftwareConfigKernels</a>]]

---

##### `notebook_upgrade_schedule_input`<sup>Optional</sup> <a name="notebook_upgrade_schedule_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeScheduleInput"></a>

```python
notebook_upgrade_schedule_input: str
```

- *Type:* str

---

##### `post_startup_script_behavior_input`<sup>Optional</sup> <a name="post_startup_script_behavior_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```python
post_startup_script_behavior_input: str
```

- *Type:* str

---

##### `post_startup_script_input`<sup>Optional</sup> <a name="post_startup_script_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptInput"></a>

```python
post_startup_script_input: str
```

- *Type:* str

---

##### `custom_gpu_driver_path`<sup>Required</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPath"></a>

```python
custom_gpu_driver_path: str
```

- *Type:* str

---

##### `enable_health_monitoring`<sup>Required</sup> <a name="enable_health_monitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoring"></a>

```python
enable_health_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_shutdown`<sup>Required</sup> <a name="idle_shutdown" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdown"></a>

```python
idle_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_shutdown_timeout`<sup>Required</sup> <a name="idle_shutdown_timeout" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeout"></a>

```python
idle_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `install_gpu_driver`<sup>Required</sup> <a name="install_gpu_driver" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriver"></a>

```python
install_gpu_driver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notebook_upgrade_schedule`<sup>Required</sup> <a name="notebook_upgrade_schedule" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeSchedule"></a>

```python
notebook_upgrade_schedule: str
```

- *Type:* str

---

##### `post_startup_script`<sup>Required</sup> <a name="post_startup_script" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

---

##### `post_startup_script_behavior`<sup>Required</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehavior"></a>

```python
post_startup_script_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeSoftwareConfig">NotebooksRuntimeSoftwareConfig</a>

---


### NotebooksRuntimeTimeoutsOutputReference <a name="NotebooksRuntimeTimeoutsOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotebooksRuntimeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeTimeouts">NotebooksRuntimeTimeouts</a>]

---


### NotebooksRuntimeVirtualMachineOutputReference <a name="NotebooksRuntimeVirtualMachineOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig">put_virtual_machine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resetVirtualMachineConfig">reset_virtual_machine_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_virtual_machine_config` <a name="put_virtual_machine_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig"></a>

```python
def put_virtual_machine_config(
  data_disk: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk,
  machine_type: str,
  accelerator_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig = None,
  container_images: typing.Union[IResolvable, typing.List[NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]] = None,
  encryption_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig = None,
  internal_ip_only: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  nic_type: str = None,
  reserved_ip_range: str = None,
  shielded_instance_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig = None,
  subnet: str = None,
  tags: typing.List[str] = None
) -> None
```

###### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.dataDisk"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#data_disk NotebooksRuntime#data_disk}

---

###### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.machineType"></a>

- *Type:* str

The Compute Engine machine type used for runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#machine_type NotebooksRuntime#machine_type}

---

###### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.acceleratorConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#accelerator_config NotebooksRuntime#accelerator_config}

---

###### `container_images`<sup>Optional</sup> <a name="container_images" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.containerImages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

container_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#container_images NotebooksRuntime#container_images}

---

###### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#encryption_config NotebooksRuntime#encryption_config}

---

###### `internal_ip_only`<sup>Optional</sup> <a name="internal_ip_only" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.internalIpOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, runtime will only have internal IP addresses.

By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
'internal_ip_only' restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#internal_ip_only NotebooksRuntime#internal_ip_only}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#labels NotebooksRuntime#labels}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#metadata NotebooksRuntime#metadata}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.network"></a>

- *Type:* str

The Compute Engine network to be used for machine communications.

Cannot be specified with subnetwork. If neither 'network' nor
'subnet' is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:
'https://www.googleapis.com/compute/v1/projects/[project_id]/
regions/global/default'
'projects/[project_id]/regions/global/default'
Runtimes are managed resources inside Google Infrastructure.
Runtimes support the following network configurations:
Google Managed Network (Network & subnet are empty)
Consumer Project VPC (network & subnet are required). Requires
configuring Private Service Access.
Shared VPC (network & subnet are required). Requires
configuring Private Service Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#network NotebooksRuntime#network}

---

###### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.nicType"></a>

- *Type:* str

The type of vNIC to be used on this interface.

This may be gVNIC
or VirtioNet. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#nic_type NotebooksRuntime#nic_type}

---

###### `reserved_ip_range`<sup>Optional</sup> <a name="reserved_ip_range" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.reservedIpRange"></a>

- *Type:* str

Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#reserved_ip_range NotebooksRuntime#reserved_ip_range}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#shielded_instance_config NotebooksRuntime#shielded_instance_config}

---

###### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.subnet"></a>

- *Type:* str

The Compute Engine subnetwork to be used for machine communications.

Cannot be specified with network. A full URL or
partial URI are valid. Examples:
'https://www.googleapis.com/compute/v1/projects/[project_id]/
regions/us-east1/subnetworks/sub0'
'projects/[project_id]/regions/us-east1/subnetworks/sub0'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#subnet NotebooksRuntime#subnet}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.tags"></a>

- *Type:* typing.List[str]

The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#tags NotebooksRuntime#tags}

---

##### `reset_virtual_machine_config` <a name="reset_virtual_machine_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.resetVirtualMachineConfig"></a>

```python
def reset_virtual_machine_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfig">virtual_machine_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfigInput">virtual_machine_config_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `virtual_machine_config`<sup>Required</sup> <a name="virtual_machine_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfig"></a>

```python
virtual_machine_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference</a>

---

##### `virtual_machine_config_input`<sup>Optional</sup> <a name="virtual_machine_config_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfigInput"></a>

```python
virtual_machine_config_input: NotebooksRuntimeVirtualMachineVirtualMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachine">NotebooksRuntimeVirtualMachine</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetCoreCount">reset_core_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_core_count` <a name="reset_core_count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetCoreCount"></a>

```python
def reset_core_count() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCountInput">core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCountInput"></a>

```python
core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskName">reset_disk_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_name` <a name="reset_disk_name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskName"></a>

```python
def reset_disk_name() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskNameInput">disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_name_input`<sup>Optional</sup> <a name="disk_name_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskNameInput"></a>

```python
disk_name_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams">put_initialize_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInitializeParams">reset_initialize_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInterface">reset_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_initialize_params` <a name="put_initialize_params" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams"></a>

```python
def put_initialize_params(
  description: str = None,
  disk_name: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  labels: typing.Mapping[str] = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.description"></a>

- *Type:* str

Provide this property when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#description NotebooksRuntime#description}

---

###### `disk_name`<sup>Optional</sup> <a name="disk_name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.diskName"></a>

- *Type:* str

Specifies the disk name.

If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#disk_name NotebooksRuntime#disk_name}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Specifies the size of the disk in base-2 GB.

If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#disk_size_gb NotebooksRuntime#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.diskType"></a>

- *Type:* str

The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#disk_type NotebooksRuntime#disk_type}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this disk.

These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#labels NotebooksRuntime#labels}

---

##### `reset_initialize_params` <a name="reset_initialize_params" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInitializeParams"></a>

```python
def reset_initialize_params() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInterface"></a>

```python
def reset_interface() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.boot">boot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.index">index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParams">initialize_params</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParamsInput">initialize_params_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.boot"></a>

```python
boot: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.guestOsFeatures"></a>

```python
guest_os_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initialize_params`<sup>Required</sup> <a name="initialize_params" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParams"></a>

```python
initialize_params: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initialize_params_input`<sup>Optional</sup> <a name="initialize_params_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParamsInput"></a>

```python
initialize_params_input: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig">put_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages">put_container_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk">put_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetAcceleratorConfig">reset_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetContainerImages">reset_container_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetInternalIpOnly">reset_internal_ip_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNicType">reset_nic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetReservedIpRange">reset_reserved_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_config` <a name="put_accelerator_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig"></a>

```python
def put_accelerator_config(
  core_count: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig.parameter.coreCount"></a>

- *Type:* typing.Union[int, float]

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#core_count NotebooksRuntime#core_count}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig.parameter.type"></a>

- *Type:* str

Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#type NotebooksRuntime#type}

---

##### `put_container_images` <a name="put_container_images" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages"></a>

```python
def put_container_images(
  value: typing.Union[IResolvable, typing.List[NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

---

##### `put_data_disk` <a name="put_data_disk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk"></a>

```python
def put_data_disk(
  initialize_params: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams = None,
  interface: str = None,
  mode: str = None,
  source: str = None,
  type: str = None
) -> None
```

###### `initialize_params`<sup>Optional</sup> <a name="initialize_params" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.initializeParams"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#initialize_params NotebooksRuntime#initialize_params}

---

###### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.interface"></a>

- *Type:* str

"Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: * NVME * SCSI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#interface NotebooksRuntime#interface}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.mode"></a>

- *Type:* str

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach
the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#mode NotebooksRuntime#mode}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.source"></a>

- *Type:* str

Specifies a valid partial or full URL to an existing Persistent Disk resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#source NotebooksRuntime#source}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.type"></a>

- *Type:* str

Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#type NotebooksRuntime#type}

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks.

It has the following format:
'projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#kms_key NotebooksRuntime#kms_key}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#enable_integrity_monitoring NotebooksRuntime#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#enable_secure_boot NotebooksRuntime#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/notebooks_runtime#enable_vtpm NotebooksRuntime#enable_vtpm}

---

##### `reset_accelerator_config` <a name="reset_accelerator_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetAcceleratorConfig"></a>

```python
def reset_accelerator_config() -> None
```

##### `reset_container_images` <a name="reset_container_images" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetContainerImages"></a>

```python
def reset_container_images() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_internal_ip_only` <a name="reset_internal_ip_only" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetInternalIpOnly"></a>

```python
def reset_internal_ip_only() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_nic_type` <a name="reset_nic_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNicType"></a>

```python
def reset_nic_type() -> None
```

##### `reset_reserved_ip_range` <a name="reset_reserved_ip_range" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetReservedIpRange"></a>

```python
def reset_reserved_ip_range() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImages">container_images</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDisk">data_disk</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.guestAttributes">guest_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfigInput">accelerator_config_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImagesInput">container_images_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDiskInput">data_disk_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnlyInput">internal_ip_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicTypeInput">nic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRangeInput">reserved_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnly">internal_ip_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_config`<sup>Required</sup> <a name="accelerator_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfig"></a>

```python
accelerator_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference</a>

---

##### `container_images`<sup>Required</sup> <a name="container_images" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImages"></a>

```python
container_images: NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList</a>

---

##### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDisk"></a>

```python
data_disk: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference</a>

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfig"></a>

```python
encryption_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference</a>

---

##### `guest_attributes`<sup>Required</sup> <a name="guest_attributes" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.guestAttributes"></a>

```python
guest_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `accelerator_config_input`<sup>Optional</sup> <a name="accelerator_config_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfigInput"></a>

```python
accelerator_config_input: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---

##### `container_images_input`<sup>Optional</sup> <a name="container_images_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImagesInput"></a>

```python
container_images_input: typing.Union[IResolvable, typing.List[NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

---

##### `data_disk_input`<sup>Optional</sup> <a name="data_disk_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDiskInput"></a>

```python
data_disk_input: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfigInput"></a>

```python
encryption_config_input: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---

##### `internal_ip_only_input`<sup>Optional</sup> <a name="internal_ip_only_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnlyInput"></a>

```python
internal_ip_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `nic_type_input`<sup>Optional</sup> <a name="nic_type_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicTypeInput"></a>

```python
nic_type_input: str
```

- *Type:* str

---

##### `reserved_ip_range_input`<sup>Optional</sup> <a name="reserved_ip_range_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRangeInput"></a>

```python
reserved_ip_range_input: str
```

- *Type:* str

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_ip_only`<sup>Required</sup> <a name="internal_ip_only" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnly"></a>

```python
internal_ip_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `reserved_ip_range`<sup>Required</sup> <a name="reserved_ip_range" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRange"></a>

```python
reserved_ip_range: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeVirtualMachineVirtualMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---


### NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference <a name="NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import notebooks_runtime

notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntime.NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---



