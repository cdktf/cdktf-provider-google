# `google_compute_disk_resource_policy_attachment`

Refer to the Terraform Registory for docs: [`google_compute_disk_resource_policy_attachment`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment).

# `computeDiskResourcePolicyAttachment` Submodule <a name="`computeDiskResourcePolicyAttachment` Submodule" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeDiskResourcePolicyAttachment <a name="ComputeDiskResourcePolicyAttachment" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment google_compute_disk_resource_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk_resource_policy_attachment

computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: str,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeDiskResourcePolicyAttachmentTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.disk">disk</a></code> | <code>str</code> | The name of the disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#id ComputeDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#project ComputeDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.zone">zone</a></code> | <code>str</code> | A reference to the zone where the disk resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.disk"></a>

- *Type:* str

The name of the disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#disk ComputeDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.name"></a>

- *Type:* str

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#name ComputeDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#id ComputeDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#project ComputeDiskResourcePolicyAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#timeouts ComputeDiskResourcePolicyAttachment#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.zone"></a>

- *Type:* str

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#zone ComputeDiskResourcePolicyAttachment#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#create ComputeDiskResourcePolicyAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#delete ComputeDiskResourcePolicyAttachment#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_disk_resource_policy_attachment

computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_disk_resource_policy_attachment

computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_disk_resource_policy_attachment

computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference">ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.timeouts"></a>

```python
timeouts: ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference">ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference</a>

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeDiskResourcePolicyAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeDiskResourcePolicyAttachmentConfig <a name="ComputeDiskResourcePolicyAttachmentConfig" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk_resource_policy_attachment

computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: str,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeDiskResourcePolicyAttachmentTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.disk">disk</a></code> | <code>str</code> | The name of the disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.name">name</a></code> | <code>str</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#id ComputeDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#project ComputeDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.zone">zone</a></code> | <code>str</code> | A reference to the zone where the disk resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.disk"></a>

```python
disk: str
```

- *Type:* str

The name of the disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#disk ComputeDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#name ComputeDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#id ComputeDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#project ComputeDiskResourcePolicyAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.timeouts"></a>

```python
timeouts: ComputeDiskResourcePolicyAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#timeouts ComputeDiskResourcePolicyAttachment#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#zone ComputeDiskResourcePolicyAttachment#zone}

---

### ComputeDiskResourcePolicyAttachmentTimeouts <a name="ComputeDiskResourcePolicyAttachmentTimeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk_resource_policy_attachment

computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#create ComputeDiskResourcePolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#delete ComputeDiskResourcePolicyAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#create ComputeDiskResourcePolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_disk_resource_policy_attachment#delete ComputeDiskResourcePolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference <a name="ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_disk_resource_policy_attachment

computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeDiskResourcePolicyAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>]

---



