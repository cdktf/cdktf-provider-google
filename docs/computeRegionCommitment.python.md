# `google_compute_region_commitment`

Refer to the Terraform Registory for docs: [`google_compute_region_commitment`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment).

# `computeRegionCommitment` Submodule <a name="`computeRegionCommitment` Submodule" id="@cdktf/provider-google.computeRegionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionCommitment <a name="ComputeRegionCommitment" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment google_compute_region_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitment(
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
  plan: str,
  auto_renew: typing.Union[bool, IResolvable] = None,
  category: str = None,
  description: str = None,
  id: str = None,
  license_resource: ComputeRegionCommitmentLicenseResource = None,
  project: str = None,
  region: str = None,
  resources: typing.Union[IResolvable, typing.List[ComputeRegionCommitmentResources]] = None,
  timeouts: ComputeRegionCommitmentTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.plan">plan</a></code> | <code>str</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.category">category</a></code> | <code>str</code> | The category of the commitment. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.licenseResource">license_resource</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.region">region</a></code> | <code>str</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]</code> | resources block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#name ComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.plan"></a>

- *Type:* str

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#plan ComputeRegionCommitment#plan}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.autoRenew"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#auto_renew ComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.category"></a>

- *Type:* str

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#category ComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#description ComputeRegionCommitment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_resource`<sup>Optional</sup> <a name="license_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.licenseResource"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#license_resource ComputeRegionCommitment#license_resource}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.region"></a>

- *Type:* str

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#region ComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.resources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#resources ComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#timeouts ComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.Initializer.parameter.type"></a>

- *Type:* str

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE_N1', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#type ComputeRegionCommitment#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource">put_license_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetAutoRenew">reset_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetLicenseResource">reset_license_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_license_resource` <a name="put_license_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource"></a>

```python
def put_license_resource(
  license: str,
  amount: str = None,
  cores_per_license: str = None
) -> None
```

###### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource.parameter.license"></a>

- *Type:* str

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#license ComputeRegionCommitment#license}

---

###### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource.parameter.amount"></a>

- *Type:* str

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#amount ComputeRegionCommitment#amount}

---

###### `cores_per_license`<sup>Optional</sup> <a name="cores_per_license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putLicenseResource.parameter.coresPerLicense"></a>

- *Type:* str

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#cores_per_license ComputeRegionCommitment#cores_per_license}

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources"></a>

```python
def put_resources(
  value: typing.Union[IResolvable, typing.List[ComputeRegionCommitmentResources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putResources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#create ComputeRegionCommitment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#delete ComputeRegionCommitment#delete}.

---

##### `reset_auto_renew` <a name="reset_auto_renew" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetAutoRenew"></a>

```python
def reset_auto_renew() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_resource` <a name="reset_license_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetLicenseResource"></a>

```python
def reset_license_resource() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.commitmentId">commitment_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.endTimestamp">end_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResource">license_resource</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference">ComputeRegionCommitmentLicenseResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList">ComputeRegionCommitmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.startTimestamp">start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference">ComputeRegionCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenewInput">auto_renew_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResourceInput">license_resource_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resourcesInput">resources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `commitment_id`<sup>Required</sup> <a name="commitment_id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.commitmentId"></a>

```python
commitment_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `end_timestamp`<sup>Required</sup> <a name="end_timestamp" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.endTimestamp"></a>

```python
end_timestamp: str
```

- *Type:* str

---

##### `license_resource`<sup>Required</sup> <a name="license_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResource"></a>

```python
license_resource: ComputeRegionCommitmentLicenseResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference">ComputeRegionCommitmentLicenseResourceOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resources"></a>

```python
resources: ComputeRegionCommitmentResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList">ComputeRegionCommitmentResourcesList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `start_timestamp`<sup>Required</sup> <a name="start_timestamp" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.startTimestamp"></a>

```python
start_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeouts"></a>

```python
timeouts: ComputeRegionCommitmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference">ComputeRegionCommitmentTimeoutsOutputReference</a>

---

##### `auto_renew_input`<sup>Optional</sup> <a name="auto_renew_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenewInput"></a>

```python
auto_renew_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_resource_input`<sup>Optional</sup> <a name="license_resource_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.licenseResourceInput"></a>

```python
license_resource_input: ComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.resourcesInput"></a>

```python
resources_input: typing.Union[IResolvable, typing.List[ComputeRegionCommitmentResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionCommitmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionCommitmentConfig <a name="ComputeRegionCommitmentConfig" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  plan: str,
  auto_renew: typing.Union[bool, IResolvable] = None,
  category: str = None,
  description: str = None,
  id: str = None,
  license_resource: ComputeRegionCommitmentLicenseResource = None,
  project: str = None,
  region: str = None,
  resources: typing.Union[IResolvable, typing.List[ComputeRegionCommitmentResources]] = None,
  timeouts: ComputeRegionCommitmentTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.plan">plan</a></code> | <code>str</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.autoRenew">auto_renew</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.category">category</a></code> | <code>str</code> | The category of the commitment. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.licenseResource">license_resource</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.region">region</a></code> | <code>str</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]</code> | resources block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.type">type</a></code> | <code>str</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#name ComputeRegionCommitment#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#plan ComputeRegionCommitment#plan}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.autoRenew"></a>

```python
auto_renew: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#auto_renew ComputeRegionCommitment#auto_renew}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.category"></a>

```python
category: str
```

- *Type:* str

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#category ComputeRegionCommitment#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#description ComputeRegionCommitment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#id ComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_resource`<sup>Optional</sup> <a name="license_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.licenseResource"></a>

```python
license_resource: ComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#license_resource ComputeRegionCommitment#license_resource}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#project ComputeRegionCommitment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#region ComputeRegionCommitment#region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.resources"></a>

```python
resources: typing.Union[IResolvable, typing.List[ComputeRegionCommitmentResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#resources ComputeRegionCommitment#resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionCommitmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#timeouts ComputeRegionCommitment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE_N1', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#type ComputeRegionCommitment#type}

---

### ComputeRegionCommitmentLicenseResource <a name="ComputeRegionCommitmentLicenseResource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitmentLicenseResource(
  license: str,
  amount: str = None,
  cores_per_license: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.license">license</a></code> | <code>str</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.amount">amount</a></code> | <code>str</code> | The number of licenses purchased. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.coresPerLicense">cores_per_license</a></code> | <code>str</code> | Specifies the core range of the instance for which this license applies. |

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.license"></a>

```python
license: str
```

- *Type:* str

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#license ComputeRegionCommitment#license}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.amount"></a>

```python
amount: str
```

- *Type:* str

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#amount ComputeRegionCommitment#amount}

---

##### `cores_per_license`<sup>Optional</sup> <a name="cores_per_license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource.property.coresPerLicense"></a>

```python
cores_per_license: str
```

- *Type:* str

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#cores_per_license ComputeRegionCommitment#cores_per_license}

---

### ComputeRegionCommitmentResources <a name="ComputeRegionCommitmentResources" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitmentResources(
  accelerator_type: str = None,
  amount: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | Name of the accelerator type resource. Applicable only when the type is ACCELERATOR. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.amount">amount</a></code> | <code>str</code> | The amount of the resource purchased (in a type-dependent unit, such as bytes). |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.type">type</a></code> | <code>str</code> | Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR. |

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#accelerator_type ComputeRegionCommitment#accelerator_type}

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.amount"></a>

```python
amount: str
```

- *Type:* str

The amount of the resource purchased (in a type-dependent unit, such as bytes).

For vCPUs, this can just be an integer. For memory,
this must be provided in MB. Memory must be a multiple of 256 MB,
with up to 6.5GB of memory per every vCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#amount ComputeRegionCommitment#amount}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources.property.type"></a>

```python
type: str
```

- *Type:* str

Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#type ComputeRegionCommitment#type}

---

### ComputeRegionCommitmentTimeouts <a name="ComputeRegionCommitmentTimeouts" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#create ComputeRegionCommitment#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#delete ComputeRegionCommitment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#create ComputeRegionCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_region_commitment#delete ComputeRegionCommitment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionCommitmentLicenseResourceOutputReference <a name="ComputeRegionCommitmentLicenseResourceOutputReference" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetAmount">reset_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense">reset_cores_per_license</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amount` <a name="reset_amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetAmount"></a>

```python
def reset_amount() -> None
```

##### `reset_cores_per_license` <a name="reset_cores_per_license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense"></a>

```python
def reset_cores_per_license() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput">amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput">cores_per_license_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput">license_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amount">amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense">cores_per_license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.license">license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput"></a>

```python
amount_input: str
```

- *Type:* str

---

##### `cores_per_license_input`<sup>Optional</sup> <a name="cores_per_license_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput"></a>

```python
cores_per_license_input: str
```

- *Type:* str

---

##### `license_input`<sup>Optional</sup> <a name="license_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput"></a>

```python
license_input: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.amount"></a>

```python
amount: str
```

- *Type:* str

---

##### `cores_per_license`<sup>Required</sup> <a name="cores_per_license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense"></a>

```python
cores_per_license: str
```

- *Type:* str

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.license"></a>

```python
license: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentLicenseResource">ComputeRegionCommitmentLicenseResource</a>

---


### ComputeRegionCommitmentResourcesList <a name="ComputeRegionCommitmentResourcesList" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitmentResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionCommitmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionCommitmentResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]]

---


### ComputeRegionCommitmentResourcesOutputReference <a name="ComputeRegionCommitmentResourcesOutputReference" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAmount">reset_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_amount` <a name="reset_amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetAmount"></a>

```python
def reset_amount() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amountInput">amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amount">amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amountInput"></a>

```python
amount_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.amount"></a>

```python
amount: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionCommitmentResources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentResources">ComputeRegionCommitmentResources</a>]

---


### ComputeRegionCommitmentTimeoutsOutputReference <a name="ComputeRegionCommitmentTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_commitment

computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionCommitmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionCommitment.ComputeRegionCommitmentTimeouts">ComputeRegionCommitmentTimeouts</a>]

---



