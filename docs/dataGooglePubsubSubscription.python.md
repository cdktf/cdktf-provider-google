# `data_google_pubsub_subscription`

Refer to the Terraform Registory for docs: [`data_google_pubsub_subscription`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription).

# `dataGooglePubsubSubscription` Submodule <a name="`dataGooglePubsubSubscription` Submodule" id="@cdktf/provider-google.dataGooglePubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePubsubSubscription <a name="DataGooglePubsubSubscription" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscription(
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
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.name"></a>

- *Type:* str

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#name DataGooglePubsubSubscription#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscription.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.ackDeadlineSeconds">ack_deadline_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.bigqueryConfig">bigquery_config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList">DataGooglePubsubSubscriptionBigqueryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.deadLetterPolicy">dead_letter_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList">DataGooglePubsubSubscriptionDeadLetterPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableExactlyOnceDelivery">enable_exactly_once_delivery</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableMessageOrdering">enable_message_ordering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.expirationPolicy">expiration_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList">DataGooglePubsubSubscriptionExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.pushConfig">push_config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList">DataGooglePubsubSubscriptionPushConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retainAckedMessages">retain_acked_messages</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList">DataGooglePubsubSubscriptionRetryPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ack_deadline_seconds`<sup>Required</sup> <a name="ack_deadline_seconds" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.ackDeadlineSeconds"></a>

```python
ack_deadline_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bigquery_config`<sup>Required</sup> <a name="bigquery_config" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.bigqueryConfig"></a>

```python
bigquery_config: DataGooglePubsubSubscriptionBigqueryConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList">DataGooglePubsubSubscriptionBigqueryConfigList</a>

---

##### `dead_letter_policy`<sup>Required</sup> <a name="dead_letter_policy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.deadLetterPolicy"></a>

```python
dead_letter_policy: DataGooglePubsubSubscriptionDeadLetterPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList">DataGooglePubsubSubscriptionDeadLetterPolicyList</a>

---

##### `enable_exactly_once_delivery`<sup>Required</sup> <a name="enable_exactly_once_delivery" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableExactlyOnceDelivery"></a>

```python
enable_exactly_once_delivery: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_message_ordering`<sup>Required</sup> <a name="enable_message_ordering" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableMessageOrdering"></a>

```python
enable_message_ordering: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expiration_policy`<sup>Required</sup> <a name="expiration_policy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.expirationPolicy"></a>

```python
expiration_policy: DataGooglePubsubSubscriptionExpirationPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList">DataGooglePubsubSubscriptionExpirationPolicyList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `message_retention_duration`<sup>Required</sup> <a name="message_retention_duration" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.messageRetentionDuration"></a>

```python
message_retention_duration: str
```

- *Type:* str

---

##### `push_config`<sup>Required</sup> <a name="push_config" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.pushConfig"></a>

```python
push_config: DataGooglePubsubSubscriptionPushConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList">DataGooglePubsubSubscriptionPushConfigList</a>

---

##### `retain_acked_messages`<sup>Required</sup> <a name="retain_acked_messages" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retainAckedMessages"></a>

```python
retain_acked_messages: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retryPolicy"></a>

```python
retry_policy: DataGooglePubsubSubscriptionRetryPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList">DataGooglePubsubSubscriptionRetryPolicyList</a>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePubsubSubscriptionBigqueryConfig <a name="DataGooglePubsubSubscriptionBigqueryConfig" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig()
```


### DataGooglePubsubSubscriptionConfig <a name="DataGooglePubsubSubscriptionConfig" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.name">name</a></code> | <code>str</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#name DataGooglePubsubSubscription#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}.

---

### DataGooglePubsubSubscriptionDeadLetterPolicy <a name="DataGooglePubsubSubscriptionDeadLetterPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy()
```


### DataGooglePubsubSubscriptionExpirationPolicy <a name="DataGooglePubsubSubscriptionExpirationPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy()
```


### DataGooglePubsubSubscriptionPushConfig <a name="DataGooglePubsubSubscriptionPushConfig" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig()
```


### DataGooglePubsubSubscriptionPushConfigOidcToken <a name="DataGooglePubsubSubscriptionPushConfigOidcToken" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken()
```


### DataGooglePubsubSubscriptionRetryPolicy <a name="DataGooglePubsubSubscriptionRetryPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePubsubSubscriptionBigqueryConfigList <a name="DataGooglePubsubSubscriptionBigqueryConfigList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubSubscriptionBigqueryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubSubscriptionBigqueryConfigOutputReference <a name="DataGooglePubsubSubscriptionBigqueryConfigOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">drop_unknown_fields</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">use_topic_schema</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">write_metadata</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig">DataGooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `drop_unknown_fields`<sup>Required</sup> <a name="drop_unknown_fields" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```python
drop_unknown_fields: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `use_topic_schema`<sup>Required</sup> <a name="use_topic_schema" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```python
use_topic_schema: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```python
write_metadata: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig">DataGooglePubsubSubscriptionBigqueryConfig</a>

---


### DataGooglePubsubSubscriptionDeadLetterPolicyList <a name="DataGooglePubsubSubscriptionDeadLetterPolicyList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference <a name="DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">dead_letter_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">max_delivery_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy">DataGooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_topic`<sup>Required</sup> <a name="dead_letter_topic" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```python
dead_letter_topic: str
```

- *Type:* str

---

##### `max_delivery_attempts`<sup>Required</sup> <a name="max_delivery_attempts" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```python
max_delivery_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy">DataGooglePubsubSubscriptionDeadLetterPolicy</a>

---


### DataGooglePubsubSubscriptionExpirationPolicyList <a name="DataGooglePubsubSubscriptionExpirationPolicyList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubSubscriptionExpirationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubSubscriptionExpirationPolicyOutputReference <a name="DataGooglePubsubSubscriptionExpirationPolicyOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy">DataGooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy">DataGooglePubsubSubscriptionExpirationPolicy</a>

---


### DataGooglePubsubSubscriptionPushConfigList <a name="DataGooglePubsubSubscriptionPushConfigList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubSubscriptionPushConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubSubscriptionPushConfigOidcTokenList <a name="DataGooglePubsubSubscriptionPushConfigOidcTokenList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference <a name="DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken">DataGooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken">DataGooglePubsubSubscriptionPushConfigOidcToken</a>

---


### DataGooglePubsubSubscriptionPushConfigOutputReference <a name="DataGooglePubsubSubscriptionPushConfigOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.attributes">attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList">DataGooglePubsubSubscriptionPushConfigOidcTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">push_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig">DataGooglePubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `oidc_token`<sup>Required</sup> <a name="oidc_token" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```python
oidc_token: DataGooglePubsubSubscriptionPushConfigOidcTokenList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList">DataGooglePubsubSubscriptionPushConfigOidcTokenList</a>

---

##### `push_endpoint`<sup>Required</sup> <a name="push_endpoint" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```python
push_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig">DataGooglePubsubSubscriptionPushConfig</a>

---


### DataGooglePubsubSubscriptionRetryPolicyList <a name="DataGooglePubsubSubscriptionRetryPolicyList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubSubscriptionRetryPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubSubscriptionRetryPolicyOutputReference <a name="DataGooglePubsubSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_pubsub_subscription

dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">maximum_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">minimum_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy">DataGooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_backoff`<sup>Required</sup> <a name="maximum_backoff" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```python
maximum_backoff: str
```

- *Type:* str

---

##### `minimum_backoff`<sup>Required</sup> <a name="minimum_backoff" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```python
minimum_backoff: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy">DataGooglePubsubSubscriptionRetryPolicy</a>

---



