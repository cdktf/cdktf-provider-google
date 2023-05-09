# `data_google_monitoring_uptime_check_ips`

Refer to the Terraform Registory for docs: [`data_google_monitoring_uptime_check_ips`](https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/data-sources/monitoring_uptime_check_ips).

# `dataGoogleMonitoringUptimeCheckIps` Submodule <a name="`dataGoogleMonitoringUptimeCheckIps` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringUptimeCheckIps <a name="DataGoogleMonitoringUptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/data-sources/monitoring_uptime_check_ips google_monitoring_uptime_check_ips}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_uptime_check_ips

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/data-sources/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/data-sources/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_uptime_check_ips

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_uptime_check_ips

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_uptime_check_ips

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.uptimeCheckIps">uptime_check_ips</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `uptime_check_ips`<sup>Required</sup> <a name="uptime_check_ips" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.uptimeCheckIps"></a>

```python
uptime_check_ips: DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringUptimeCheckIpsConfig <a name="DataGoogleMonitoringUptimeCheckIpsConfig" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_uptime_check_ips

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/data-sources/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/data-sources/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_uptime_check_ips

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_uptime_check_ips

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_uptime_check_ips

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps</a>

---



