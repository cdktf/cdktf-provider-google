# `google_compute_packet_mirroring`

Refer to the Terraform Registory for docs: [`google_compute_packet_mirroring`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring).

# `computePacketMirroring` Submodule <a name="`computePacketMirroring` Submodule" id="@cdktf/provider-google.computePacketMirroring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePacketMirroring <a name="ComputePacketMirroring" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring google_compute_packet_mirroring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroring(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collector_ilb: ComputePacketMirroringCollectorIlb,
  mirrored_resources: ComputePacketMirroringMirroredResources,
  name: str,
  network: ComputePacketMirroringNetwork,
  description: str = None,
  filter: ComputePacketMirroringFilter = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  region: str = None,
  timeouts: ComputePacketMirroringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.collectorIlb">collector_ilb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | collector_ilb block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.mirroredResources">mirrored_resources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | mirrored_resources block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the packet mirroring rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collector_ilb`<sup>Required</sup> <a name="collector_ilb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.collectorIlb"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

collector_ilb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#collector_ilb ComputePacketMirroring#collector_ilb}

---

##### `mirrored_resources`<sup>Required</sup> <a name="mirrored_resources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.mirroredResources"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

mirrored_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#mirrored_resources ComputePacketMirroring#mirrored_resources}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.name"></a>

- *Type:* str

The name of the packet mirroring rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#name ComputePacketMirroring#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#network ComputePacketMirroring#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#description ComputePacketMirroring#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#filter ComputePacketMirroring#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#priority ComputePacketMirroring#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#region ComputePacketMirroring#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#timeouts ComputePacketMirroring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb">put_collector_ilb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources">put_mirrored_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_collector_ilb` <a name="put_collector_ilb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb"></a>

```python
def put_collector_ilb(
  url: str
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb.parameter.url"></a>

- *Type:* str

The URL of the forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter"></a>

```python
def put_filter(
  cidr_ranges: typing.List[str] = None,
  direction: str = None,
  ip_protocols: typing.List[str] = None
) -> None
```

###### `cidr_ranges`<sup>Optional</sup> <a name="cidr_ranges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter.parameter.cidrRanges"></a>

- *Type:* typing.List[str]

IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header.

Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#cidr_ranges ComputePacketMirroring#cidr_ranges}

---

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter.parameter.direction"></a>

- *Type:* str

Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#direction ComputePacketMirroring#direction}

---

###### `ip_protocols`<sup>Optional</sup> <a name="ip_protocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter.parameter.ipProtocols"></a>

- *Type:* typing.List[str]

Possible IP protocols including tcp, udp, icmp and esp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#ip_protocols ComputePacketMirroring#ip_protocols}

---

##### `put_mirrored_resources` <a name="put_mirrored_resources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources"></a>

```python
def put_mirrored_resources(
  instances: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesInstances]] = None,
  subnetworks: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesSubnetworks]] = None,
  tags: typing.List[str] = None
) -> None
```

###### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources.parameter.instances"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#instances ComputePacketMirroring#instances}

---

###### `subnetworks`<sup>Optional</sup> <a name="subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources.parameter.subnetworks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]]

subnetworks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#subnetworks ComputePacketMirroring#subnetworks}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources.parameter.tags"></a>

- *Type:* typing.List[str]

All instances with these tags will be mirrored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#tags ComputePacketMirroring#tags}

---

##### `put_network` <a name="put_network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork"></a>

```python
def put_network(
  url: str
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork.parameter.url"></a>

- *Type:* str

The full self_link URL of the network where this rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroring.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroring.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroring.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlb">collector_ilb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference">ComputePacketMirroringCollectorIlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference">ComputePacketMirroringFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResources">mirrored_resources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference">ComputePacketMirroringMirroredResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference">ComputePacketMirroringNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference">ComputePacketMirroringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlbInput">collector_ilb_input</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResourcesInput">mirrored_resources_input</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collector_ilb`<sup>Required</sup> <a name="collector_ilb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlb"></a>

```python
collector_ilb: ComputePacketMirroringCollectorIlbOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference">ComputePacketMirroringCollectorIlbOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filter"></a>

```python
filter: ComputePacketMirroringFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference">ComputePacketMirroringFilterOutputReference</a>

---

##### `mirrored_resources`<sup>Required</sup> <a name="mirrored_resources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResources"></a>

```python
mirrored_resources: ComputePacketMirroringMirroredResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference">ComputePacketMirroringMirroredResourcesOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.network"></a>

```python
network: ComputePacketMirroringNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference">ComputePacketMirroringNetworkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeouts"></a>

```python
timeouts: ComputePacketMirroringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference">ComputePacketMirroringTimeoutsOutputReference</a>

---

##### `collector_ilb_input`<sup>Optional</sup> <a name="collector_ilb_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlbInput"></a>

```python
collector_ilb_input: ComputePacketMirroringCollectorIlb
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filterInput"></a>

```python
filter_input: ComputePacketMirroringFilter
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mirrored_resources_input`<sup>Optional</sup> <a name="mirrored_resources_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResourcesInput"></a>

```python
mirrored_resources_input: ComputePacketMirroringMirroredResources
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.networkInput"></a>

```python
network_input: ComputePacketMirroringNetwork
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputePacketMirroringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePacketMirroringCollectorIlb <a name="ComputePacketMirroringCollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringCollectorIlb(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.property.url">url</a></code> | <code>str</code> | The URL of the forwarding rule. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringConfig <a name="ComputePacketMirroringConfig" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collector_ilb: ComputePacketMirroringCollectorIlb,
  mirrored_resources: ComputePacketMirroringMirroredResources,
  name: str,
  network: ComputePacketMirroringNetwork,
  description: str = None,
  filter: ComputePacketMirroringFilter = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  region: str = None,
  timeouts: ComputePacketMirroringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.collectorIlb">collector_ilb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | collector_ilb block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.mirroredResources">mirrored_resources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | mirrored_resources block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.name">name</a></code> | <code>str</code> | The name of the packet mirroring rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collector_ilb`<sup>Required</sup> <a name="collector_ilb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.collectorIlb"></a>

```python
collector_ilb: ComputePacketMirroringCollectorIlb
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

collector_ilb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#collector_ilb ComputePacketMirroring#collector_ilb}

---

##### `mirrored_resources`<sup>Required</sup> <a name="mirrored_resources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.mirroredResources"></a>

```python
mirrored_resources: ComputePacketMirroringMirroredResources
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

mirrored_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#mirrored_resources ComputePacketMirroring#mirrored_resources}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the packet mirroring rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#name ComputePacketMirroring#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.network"></a>

```python
network: ComputePacketMirroringNetwork
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#network ComputePacketMirroring#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#description ComputePacketMirroring#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.filter"></a>

```python
filter: ComputePacketMirroringFilter
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#filter ComputePacketMirroring#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#priority ComputePacketMirroring#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#region ComputePacketMirroring#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.timeouts"></a>

```python
timeouts: ComputePacketMirroringTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#timeouts ComputePacketMirroring#timeouts}

---

### ComputePacketMirroringFilter <a name="ComputePacketMirroringFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringFilter(
  cidr_ranges: typing.List[str] = None,
  direction: str = None,
  ip_protocols: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.cidrRanges">cidr_ranges</a></code> | <code>typing.List[str]</code> | IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.direction">direction</a></code> | <code>str</code> | Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"]. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | Possible IP protocols including tcp, udp, icmp and esp. |

---

##### `cidr_ranges`<sup>Optional</sup> <a name="cidr_ranges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.cidrRanges"></a>

```python
cidr_ranges: typing.List[str]
```

- *Type:* typing.List[str]

IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header.

Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#cidr_ranges ComputePacketMirroring#cidr_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#direction ComputePacketMirroring#direction}

---

##### `ip_protocols`<sup>Optional</sup> <a name="ip_protocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Possible IP protocols including tcp, udp, icmp and esp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#ip_protocols ComputePacketMirroring#ip_protocols}

---

### ComputePacketMirroringMirroredResources <a name="ComputePacketMirroringMirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringMirroredResources(
  instances: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesInstances]] = None,
  subnetworks: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesSubnetworks]] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.instances">instances</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]]</code> | instances block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.subnetworks">subnetworks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]]</code> | subnetworks block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.tags">tags</a></code> | <code>typing.List[str]</code> | All instances with these tags will be mirrored. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.instances"></a>

```python
instances: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesInstances]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#instances ComputePacketMirroring#instances}

---

##### `subnetworks`<sup>Optional</sup> <a name="subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.subnetworks"></a>

```python
subnetworks: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesSubnetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]]

subnetworks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#subnetworks ComputePacketMirroring#subnetworks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

All instances with these tags will be mirrored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#tags ComputePacketMirroring#tags}

---

### ComputePacketMirroringMirroredResourcesInstances <a name="ComputePacketMirroringMirroredResourcesInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.property.url">url</a></code> | <code>str</code> | The URL of the instances where this rule should be active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the instances where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringMirroredResourcesSubnetworks <a name="ComputePacketMirroringMirroredResourcesSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.property.url">url</a></code> | <code>str</code> | The URL of the subnetwork where this rule should be active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the subnetwork where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringNetwork <a name="ComputePacketMirroringNetwork" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringNetwork(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.property.url">url</a></code> | <code>str</code> | The full self_link URL of the network where this rule is active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.property.url"></a>

```python
url: str
```

- *Type:* str

The full self_link URL of the network where this rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringTimeouts <a name="ComputePacketMirroringTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePacketMirroringCollectorIlbOutputReference <a name="ComputePacketMirroringCollectorIlbOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.internalValue"></a>

```python
internal_value: ComputePacketMirroringCollectorIlb
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---


### ComputePacketMirroringFilterOutputReference <a name="ComputePacketMirroringFilterOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetCidrRanges">reset_cidr_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetIpProtocols">reset_ip_protocols</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_ranges` <a name="reset_cidr_ranges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetCidrRanges"></a>

```python
def reset_cidr_ranges() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_ip_protocols` <a name="reset_ip_protocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetIpProtocols"></a>

```python
def reset_ip_protocols() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRangesInput">cidr_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocolsInput">ip_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRanges">cidr_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_ranges_input`<sup>Optional</sup> <a name="cidr_ranges_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRangesInput"></a>

```python
cidr_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `ip_protocols_input`<sup>Optional</sup> <a name="ip_protocols_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocolsInput"></a>

```python
ip_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidr_ranges`<sup>Required</sup> <a name="cidr_ranges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRanges"></a>

```python
cidr_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `ip_protocols`<sup>Required</sup> <a name="ip_protocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.internalValue"></a>

```python
internal_value: ComputePacketMirroringFilter
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---


### ComputePacketMirroringMirroredResourcesInstancesList <a name="ComputePacketMirroringMirroredResourcesInstancesList" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputePacketMirroringMirroredResourcesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesInstances]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]]

---


### ComputePacketMirroringMirroredResourcesInstancesOutputReference <a name="ComputePacketMirroringMirroredResourcesInstancesOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputePacketMirroringMirroredResourcesInstances]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]

---


### ComputePacketMirroringMirroredResourcesOutputReference <a name="ComputePacketMirroringMirroredResourcesOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances">put_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks">put_subnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks">reset_subnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instances` <a name="put_instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances"></a>

```python
def put_instances(
  value: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesInstances]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]]

---

##### `put_subnetworks` <a name="put_subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks"></a>

```python
def put_subnetworks(
  value: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesSubnetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]]

---

##### `reset_instances` <a name="reset_instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_subnetworks` <a name="reset_subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks"></a>

```python
def reset_subnetworks() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList">ComputePacketMirroringMirroredResourcesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks">subnetworks</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList">ComputePacketMirroringMirroredResourcesSubnetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput">subnetworks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instances"></a>

```python
instances: ComputePacketMirroringMirroredResourcesInstancesList
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList">ComputePacketMirroringMirroredResourcesInstancesList</a>

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks"></a>

```python
subnetworks: ComputePacketMirroringMirroredResourcesSubnetworksList
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList">ComputePacketMirroringMirroredResourcesSubnetworksList</a>

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput"></a>

```python
instances_input: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesInstances]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>]]

---

##### `subnetworks_input`<sup>Optional</sup> <a name="subnetworks_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput"></a>

```python
subnetworks_input: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesSubnetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.internalValue"></a>

```python
internal_value: ComputePacketMirroringMirroredResources
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---


### ComputePacketMirroringMirroredResourcesSubnetworksList <a name="ComputePacketMirroringMirroredResourcesSubnetworksList" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputePacketMirroringMirroredResourcesSubnetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputePacketMirroringMirroredResourcesSubnetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]]

---


### ComputePacketMirroringMirroredResourcesSubnetworksOutputReference <a name="ComputePacketMirroringMirroredResourcesSubnetworksOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputePacketMirroringMirroredResourcesSubnetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>]

---


### ComputePacketMirroringNetworkOutputReference <a name="ComputePacketMirroringNetworkOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.internalValue"></a>

```python
internal_value: ComputePacketMirroringNetwork
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---


### ComputePacketMirroringTimeoutsOutputReference <a name="ComputePacketMirroringTimeoutsOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_packet_mirroring

computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputePacketMirroringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>]

---



