# `dataGoogleVmwareengineNetworkPolicy` Submodule <a name="`dataGoogleVmwareengineNetworkPolicy` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineNetworkPolicy <a name="DataGoogleVmwareengineNetworkPolicy" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy google_vmwareengine_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy(
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
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#id DataGoogleVmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#project DataGoogleVmwareengineNetworkPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.location"></a>

- *Type:* str

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#location DataGoogleVmwareengineNetworkPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.name"></a>

- *Type:* str

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#name DataGoogleVmwareengineNetworkPolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#id DataGoogleVmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#project DataGoogleVmwareengineNetworkPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleVmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleVmwareengineNetworkPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleVmwareengineNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.edgeServicesCidr">edge_services_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.externalIp">external_ip</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList">DataGoogleVmwareengineNetworkPolicyExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.internetAccess">internet_access</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList">DataGoogleVmwareengineNetworkPolicyInternetAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical">vmware_engine_network_canonical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edge_services_cidr`<sup>Required</sup> <a name="edge_services_cidr" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.edgeServicesCidr"></a>

```python
edge_services_cidr: str
```

- *Type:* str

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.externalIp"></a>

```python
external_ip: DataGoogleVmwareengineNetworkPolicyExternalIpList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList">DataGoogleVmwareengineNetworkPolicyExternalIpList</a>

---

##### `internet_access`<sup>Required</sup> <a name="internet_access" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.internetAccess"></a>

```python
internet_access: DataGoogleVmwareengineNetworkPolicyInternetAccessList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList">DataGoogleVmwareengineNetworkPolicyInternetAccessList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vmware_engine_network`<sup>Required</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.vmwareEngineNetwork"></a>

```python
vmware_engine_network: str
```

- *Type:* str

---

##### `vmware_engine_network_canonical`<sup>Required</sup> <a name="vmware_engine_network_canonical" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical"></a>

```python
vmware_engine_network_canonical: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineNetworkPolicyConfig <a name="DataGoogleVmwareengineNetworkPolicyConfig" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.location">location</a></code> | <code>str</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.name">name</a></code> | <code>str</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#id DataGoogleVmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#project DataGoogleVmwareengineNetworkPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#location DataGoogleVmwareengineNetworkPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#name DataGoogleVmwareengineNetworkPolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#id DataGoogleVmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/vmwareengine_network_policy#project DataGoogleVmwareengineNetworkPolicy#project}.

---

### DataGoogleVmwareengineNetworkPolicyExternalIp <a name="DataGoogleVmwareengineNetworkPolicyExternalIp" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp()
```


### DataGoogleVmwareengineNetworkPolicyInternetAccess <a name="DataGoogleVmwareengineNetworkPolicyInternetAccess" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineNetworkPolicyExternalIpList <a name="DataGoogleVmwareengineNetworkPolicyExternalIpList" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference <a name="DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp">DataGoogleVmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVmwareengineNetworkPolicyExternalIp
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp">DataGoogleVmwareengineNetworkPolicyExternalIp</a>

---


### DataGoogleVmwareengineNetworkPolicyInternetAccessList <a name="DataGoogleVmwareengineNetworkPolicyInternetAccessList" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference <a name="DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_network_policy

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess">DataGoogleVmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVmwareengineNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess">DataGoogleVmwareengineNetworkPolicyInternetAccess</a>

---



