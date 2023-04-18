# `google_logging_project_exclusion`

Refer to the Terraform Registory for docs: [`google_logging_project_exclusion`](https://www.terraform.io/docs/providers/google/r/logging_project_exclusion).

# `loggingProjectExclusion` Submodule <a name="`loggingProjectExclusion` Submodule" id="@cdktf/provider-google.loggingProjectExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingProjectExclusion <a name="LoggingProjectExclusion" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion google_logging_project_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_exclusion

loggingProjectExclusion.LoggingProjectExclusion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str,
  name: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter to apply when excluding logs. Only log entries that match the filter are excluded. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the logging exclusion. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this exclusion rule should be disabled or not. This defaults to false. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#id LoggingProjectExclusion#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#project LoggingProjectExclusion#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.filter"></a>

- *Type:* str

The filter to apply when excluding logs. Only log entries that match the filter are excluded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#filter LoggingProjectExclusion#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.name"></a>

- *Type:* str

The name of the logging exclusion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#name LoggingProjectExclusion#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#description LoggingProjectExclusion#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this exclusion rule should be disabled or not. This defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#disabled LoggingProjectExclusion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#id LoggingProjectExclusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#project LoggingProjectExclusion#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import logging_project_exclusion

loggingProjectExclusion.LoggingProjectExclusion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import logging_project_exclusion

loggingProjectExclusion.LoggingProjectExclusion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import logging_project_exclusion

loggingProjectExclusion.LoggingProjectExclusion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingProjectExclusionConfig <a name="LoggingProjectExclusionConfig" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_exclusion

loggingProjectExclusion.LoggingProjectExclusionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str,
  name: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.filter">filter</a></code> | <code>str</code> | The filter to apply when excluding logs. Only log entries that match the filter are excluded. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.name">name</a></code> | <code>str</code> | The name of the logging exclusion. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.description">description</a></code> | <code>str</code> | A human-readable description. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this exclusion rule should be disabled or not. This defaults to false. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#id LoggingProjectExclusion#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#project LoggingProjectExclusion#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter to apply when excluding logs. Only log entries that match the filter are excluded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#filter LoggingProjectExclusion#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the logging exclusion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#name LoggingProjectExclusion#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#description LoggingProjectExclusion#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this exclusion rule should be disabled or not. This defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#disabled LoggingProjectExclusion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#id LoggingProjectExclusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.loggingProjectExclusion.LoggingProjectExclusionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_exclusion#project LoggingProjectExclusion#project}.

---



