# `google_healthcare_hl7_v2_store`

Refer to the Terraform Registory for docs: [`google_healthcare_hl7_v2_store`](https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store).

# `healthcareHl7V2Store` Submodule <a name="`healthcareHl7V2Store` Submodule" id="@cdktf/provider-google.healthcareHl7V2Store"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2Store <a name="HealthcareHl7V2Store" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store google_healthcare_hl7_v2_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2Store(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  notification_config: HealthcareHl7V2StoreNotificationConfig = None,
  notification_configs: typing.Union[IResolvable, typing.List[HealthcareHl7V2StoreNotificationConfigs]] = None,
  parser_config: HealthcareHl7V2StoreParserConfig = None,
  timeouts: HealthcareHl7V2StoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for the Hl7V2Store. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize HL7v2 stores. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.notificationConfigs">notification_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]</code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.parserConfig">parser_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | parser_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.dataset"></a>

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#dataset HealthcareHl7V2Store#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.name"></a>

- *Type:* str

The resource name for the Hl7V2Store.

* Changing this property may recreate the Hl7v2 store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#name HealthcareHl7V2Store#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize HL7v2 stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#labels HealthcareHl7V2Store#labels}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#notification_config HealthcareHl7V2Store#notification_config}

---

##### `notification_configs`<sup>Optional</sup> <a name="notification_configs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.notificationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#notification_configs HealthcareHl7V2Store#notification_configs}

---

##### `parser_config`<sup>Optional</sup> <a name="parser_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.parserConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

parser_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#parser_config HealthcareHl7V2Store#parser_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#timeouts HealthcareHl7V2Store#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig">put_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs">put_notification_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig">put_parser_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfig">reset_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfigs">reset_notification_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetParserConfig">reset_parser_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_notification_config` <a name="put_notification_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig"></a>

```python
def put_notification_config(
  pubsub_topic: str
) -> None
```

###### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig.parameter.pubsubTopic"></a>

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

##### `put_notification_configs` <a name="put_notification_configs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs"></a>

```python
def put_notification_configs(
  value: typing.Union[IResolvable, typing.List[HealthcareHl7V2StoreNotificationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]

---

##### `put_parser_config` <a name="put_parser_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig"></a>

```python
def put_parser_config(
  allow_null_header: typing.Union[bool, IResolvable] = None,
  schema: str = None,
  segment_terminator: str = None,
  version: str = None
) -> None
```

###### `allow_null_header`<sup>Optional</sup> <a name="allow_null_header" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig.parameter.allowNullHeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether messages with no header are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#allow_null_header HealthcareHl7V2Store#allow_null_header}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig.parameter.schema"></a>

- *Type:* str

JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#schema HealthcareHl7V2Store#schema}

---

###### `segment_terminator`<sup>Optional</sup> <a name="segment_terminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig.parameter.segmentTerminator"></a>

- *Type:* str

Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#segment_terminator HealthcareHl7V2Store#segment_terminator}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig.parameter.version"></a>

- *Type:* str

The version of the unschematized parser to be used when a custom 'schema' is not set.

Default value: "V1" Possible values: ["V1", "V2", "V3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#version HealthcareHl7V2Store#version}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_notification_config` <a name="reset_notification_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfig"></a>

```python
def reset_notification_config() -> None
```

##### `reset_notification_configs` <a name="reset_notification_configs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfigs"></a>

```python
def reset_notification_configs() -> None
```

##### `reset_parser_config` <a name="reset_parser_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetParserConfig"></a>

```python
def reset_parser_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2Store.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2Store.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2Store.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference">HealthcareHl7V2StoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigs">notification_configs</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList">HealthcareHl7V2StoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfig">parser_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference">HealthcareHl7V2StoreParserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference">HealthcareHl7V2StoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigInput">notification_config_input</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigsInput">notification_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfigInput">parser_config_input</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfig"></a>

```python
notification_config: HealthcareHl7V2StoreNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference">HealthcareHl7V2StoreNotificationConfigOutputReference</a>

---

##### `notification_configs`<sup>Required</sup> <a name="notification_configs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigs"></a>

```python
notification_configs: HealthcareHl7V2StoreNotificationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList">HealthcareHl7V2StoreNotificationConfigsList</a>

---

##### `parser_config`<sup>Required</sup> <a name="parser_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfig"></a>

```python
parser_config: HealthcareHl7V2StoreParserConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference">HealthcareHl7V2StoreParserConfigOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeouts"></a>

```python
timeouts: HealthcareHl7V2StoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference">HealthcareHl7V2StoreTimeoutsOutputReference</a>

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_config_input`<sup>Optional</sup> <a name="notification_config_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigInput"></a>

```python
notification_config_input: HealthcareHl7V2StoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---

##### `notification_configs_input`<sup>Optional</sup> <a name="notification_configs_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigsInput"></a>

```python
notification_configs_input: typing.Union[IResolvable, typing.List[HealthcareHl7V2StoreNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]

---

##### `parser_config_input`<sup>Optional</sup> <a name="parser_config_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfigInput"></a>

```python
parser_config_input: HealthcareHl7V2StoreParserConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HealthcareHl7V2StoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreConfig <a name="HealthcareHl7V2StoreConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  notification_config: HealthcareHl7V2StoreNotificationConfig = None,
  notification_configs: typing.Union[IResolvable, typing.List[HealthcareHl7V2StoreNotificationConfigs]] = None,
  parser_config: HealthcareHl7V2StoreParserConfig = None,
  timeouts: HealthcareHl7V2StoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.name">name</a></code> | <code>str</code> | The resource name for the Hl7V2Store. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize HL7v2 stores. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfigs">notification_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]</code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.parserConfig">parser_config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | parser_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#dataset HealthcareHl7V2Store#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for the Hl7V2Store.

* Changing this property may recreate the Hl7v2 store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#name HealthcareHl7V2Store#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize HL7v2 stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#labels HealthcareHl7V2Store#labels}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfig"></a>

```python
notification_config: HealthcareHl7V2StoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#notification_config HealthcareHl7V2Store#notification_config}

---

##### `notification_configs`<sup>Optional</sup> <a name="notification_configs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfigs"></a>

```python
notification_configs: typing.Union[IResolvable, typing.List[HealthcareHl7V2StoreNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#notification_configs HealthcareHl7V2Store#notification_configs}

---

##### `parser_config`<sup>Optional</sup> <a name="parser_config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.parserConfig"></a>

```python
parser_config: HealthcareHl7V2StoreParserConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

parser_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#parser_config HealthcareHl7V2Store#parser_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.timeouts"></a>

```python
timeouts: HealthcareHl7V2StoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#timeouts HealthcareHl7V2Store#timeouts}

---

### HealthcareHl7V2StoreNotificationConfig <a name="HealthcareHl7V2StoreNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig(
  pubsub_topic: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

### HealthcareHl7V2StoreNotificationConfigs <a name="HealthcareHl7V2StoreNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs(
  pubsub_topic: str,
  filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.filter">filter</a></code> | <code>str</code> | Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings. |

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

If a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.filter"></a>

```python
filter: str
```

- *Type:* str

Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings.

Fields/functions available for filtering are:

messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".
send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset's timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".
sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".
sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".
PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").
labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :* can be used to assert the existence of a label. For example, labels."priority":*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#filter HealthcareHl7V2Store#filter}

---

### HealthcareHl7V2StoreParserConfig <a name="HealthcareHl7V2StoreParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig(
  allow_null_header: typing.Union[bool, IResolvable] = None,
  schema: str = None,
  segment_terminator: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.allowNullHeader">allow_null_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether messages with no header are allowed. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.schema">schema</a></code> | <code>str</code> | JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.segmentTerminator">segment_terminator</a></code> | <code>str</code> | Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.version">version</a></code> | <code>str</code> | The version of the unschematized parser to be used when a custom 'schema' is not set. |

---

##### `allow_null_header`<sup>Optional</sup> <a name="allow_null_header" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.allowNullHeader"></a>

```python
allow_null_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether messages with no header are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#allow_null_header HealthcareHl7V2Store#allow_null_header}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#schema HealthcareHl7V2Store#schema}

---

##### `segment_terminator`<sup>Optional</sup> <a name="segment_terminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.segmentTerminator"></a>

```python
segment_terminator: str
```

- *Type:* str

Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#segment_terminator HealthcareHl7V2Store#segment_terminator}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the unschematized parser to be used when a custom 'schema' is not set.

Default value: "V1" Possible values: ["V1", "V2", "V3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#version HealthcareHl7V2Store#version}

---

### HealthcareHl7V2StoreTimeouts <a name="HealthcareHl7V2StoreTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareHl7V2StoreNotificationConfigOutputReference <a name="HealthcareHl7V2StoreNotificationConfigOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: HealthcareHl7V2StoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---


### HealthcareHl7V2StoreNotificationConfigsList <a name="HealthcareHl7V2StoreNotificationConfigsList" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HealthcareHl7V2StoreNotificationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HealthcareHl7V2StoreNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]]

---


### HealthcareHl7V2StoreNotificationConfigsOutputReference <a name="HealthcareHl7V2StoreNotificationConfigsOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HealthcareHl7V2StoreNotificationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>]

---


### HealthcareHl7V2StoreParserConfigOutputReference <a name="HealthcareHl7V2StoreParserConfigOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetAllowNullHeader">reset_allow_null_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSegmentTerminator">reset_segment_terminator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_null_header` <a name="reset_allow_null_header" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetAllowNullHeader"></a>

```python
def reset_allow_null_header() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_segment_terminator` <a name="reset_segment_terminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSegmentTerminator"></a>

```python
def reset_segment_terminator() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeaderInput">allow_null_header_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminatorInput">segment_terminator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeader">allow_null_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminator">segment_terminator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_null_header_input`<sup>Optional</sup> <a name="allow_null_header_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeaderInput"></a>

```python
allow_null_header_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `segment_terminator_input`<sup>Optional</sup> <a name="segment_terminator_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminatorInput"></a>

```python
segment_terminator_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `allow_null_header`<sup>Required</sup> <a name="allow_null_header" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeader"></a>

```python
allow_null_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `segment_terminator`<sup>Required</sup> <a name="segment_terminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminator"></a>

```python
segment_terminator: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.internalValue"></a>

```python
internal_value: HealthcareHl7V2StoreParserConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---


### HealthcareHl7V2StoreTimeoutsOutputReference <a name="HealthcareHl7V2StoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store

healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HealthcareHl7V2StoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>]

---



