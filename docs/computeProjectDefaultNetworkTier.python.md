# `google_compute_project_default_network_tier`

Refer to the Terraform Registory for docs: [`google_compute_project_default_network_tier`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier).

# `computeProjectDefaultNetworkTier` Submodule <a name="`computeProjectDefaultNetworkTier` Submodule" id="@cdktf/provider-google.computeProjectDefaultNetworkTier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeProjectDefaultNetworkTier <a name="ComputeProjectDefaultNetworkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier google_compute_project_default_network_tier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_project_default_network_tier

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_tier: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeProjectDefaultNetworkTierTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.networkTier">network_tier</a></code> | <code>str</code> | The default network tier to be configured for the project. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.networkTier"></a>

- *Type:* str

The default network tier to be configured for the project.

This field can take the following values: PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#network_tier ComputeProjectDefaultNetworkTier#network_tier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#project ComputeProjectDefaultNetworkTier#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#timeouts ComputeProjectDefaultNetworkTier#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_project_default_network_tier

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_project_default_network_tier

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_project_default_network_tier

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference">ComputeProjectDefaultNetworkTierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTierInput">network_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeouts"></a>

```python
timeouts: ComputeProjectDefaultNetworkTierTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference">ComputeProjectDefaultNetworkTierTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_tier_input`<sup>Optional</sup> <a name="network_tier_input" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTierInput"></a>

```python
network_tier_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ComputeProjectDefaultNetworkTierTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeProjectDefaultNetworkTierConfig <a name="ComputeProjectDefaultNetworkTierConfig" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_project_default_network_tier

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_tier: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeProjectDefaultNetworkTierTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.networkTier">network_tier</a></code> | <code>str</code> | The default network tier to be configured for the project. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

The default network tier to be configured for the project.

This field can take the following values: PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#network_tier ComputeProjectDefaultNetworkTier#network_tier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#project ComputeProjectDefaultNetworkTier#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.timeouts"></a>

```python
timeouts: ComputeProjectDefaultNetworkTierTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#timeouts ComputeProjectDefaultNetworkTier#timeouts}

---

### ComputeProjectDefaultNetworkTierTimeouts <a name="ComputeProjectDefaultNetworkTierTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_project_default_network_tier

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeProjectDefaultNetworkTierTimeoutsOutputReference <a name="ComputeProjectDefaultNetworkTierTimeoutsOutputReference" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_project_default_network_tier

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ComputeProjectDefaultNetworkTierTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>, cdktf.IResolvable]

---



