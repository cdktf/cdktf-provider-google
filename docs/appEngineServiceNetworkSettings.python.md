# `google_app_engine_service_network_settings`

Refer to the Terraform Registory for docs: [`google_app_engine_service_network_settings`](https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings).

# `appEngineServiceNetworkSettings` Submodule <a name="`appEngineServiceNetworkSettings` Submodule" id="@cdktf/provider-google.appEngineServiceNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineServiceNetworkSettings <a name="AppEngineServiceNetworkSettings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings google_app_engine_service_network_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_settings: AppEngineServiceNetworkSettingsNetworkSettings,
  service: str,
  id: str = None,
  project: str = None,
  timeouts: AppEngineServiceNetworkSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.networkSettings">network_settings</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | network_settings block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.service">service</a></code> | <code>str</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#id AppEngineServiceNetworkSettings#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#project AppEngineServiceNetworkSettings#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_settings`<sup>Required</sup> <a name="network_settings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.networkSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

network_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#network_settings AppEngineServiceNetworkSettings#network_settings}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.service"></a>

- *Type:* str

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#service AppEngineServiceNetworkSettings#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#id AppEngineServiceNetworkSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#project AppEngineServiceNetworkSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#timeouts AppEngineServiceNetworkSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings">put_network_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_network_settings` <a name="put_network_settings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings"></a>

```python
def put_network_settings(
  ingress_traffic_allowed: str = None
) -> None
```

###### `ingress_traffic_allowed`<sup>Optional</sup> <a name="ingress_traffic_allowed" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings.parameter.ingressTrafficAllowed"></a>

- *Type:* str

The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#ingress_traffic_allowed AppEngineServiceNetworkSettings#ingress_traffic_allowed}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#create AppEngineServiceNetworkSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#delete AppEngineServiceNetworkSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#update AppEngineServiceNetworkSettings#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettings">network_settings</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference">AppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference">AppEngineServiceNetworkSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettingsInput">network_settings_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_settings`<sup>Required</sup> <a name="network_settings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettings"></a>

```python
network_settings: AppEngineServiceNetworkSettingsNetworkSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference">AppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeouts"></a>

```python
timeouts: AppEngineServiceNetworkSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference">AppEngineServiceNetworkSettingsTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_settings_input`<sup>Optional</sup> <a name="network_settings_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettingsInput"></a>

```python
network_settings_input: AppEngineServiceNetworkSettingsNetworkSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AppEngineServiceNetworkSettingsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineServiceNetworkSettingsConfig <a name="AppEngineServiceNetworkSettingsConfig" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_settings: AppEngineServiceNetworkSettingsNetworkSettings,
  service: str,
  id: str = None,
  project: str = None,
  timeouts: AppEngineServiceNetworkSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.networkSettings">network_settings</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | network_settings block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.service">service</a></code> | <code>str</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#id AppEngineServiceNetworkSettings#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#project AppEngineServiceNetworkSettings#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_settings`<sup>Required</sup> <a name="network_settings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.networkSettings"></a>

```python
network_settings: AppEngineServiceNetworkSettingsNetworkSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

network_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#network_settings AppEngineServiceNetworkSettings#network_settings}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#service AppEngineServiceNetworkSettings#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#id AppEngineServiceNetworkSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#project AppEngineServiceNetworkSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.timeouts"></a>

```python
timeouts: AppEngineServiceNetworkSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#timeouts AppEngineServiceNetworkSettings#timeouts}

---

### AppEngineServiceNetworkSettingsNetworkSettings <a name="AppEngineServiceNetworkSettingsNetworkSettings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings(
  ingress_traffic_allowed: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed">ingress_traffic_allowed</a></code> | <code>str</code> | The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"]. |

---

##### `ingress_traffic_allowed`<sup>Optional</sup> <a name="ingress_traffic_allowed" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed"></a>

```python
ingress_traffic_allowed: str
```

- *Type:* str

The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#ingress_traffic_allowed AppEngineServiceNetworkSettings#ingress_traffic_allowed}

---

### AppEngineServiceNetworkSettingsTimeouts <a name="AppEngineServiceNetworkSettingsTimeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#create AppEngineServiceNetworkSettings#create}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#delete AppEngineServiceNetworkSettings#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#update AppEngineServiceNetworkSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#create AppEngineServiceNetworkSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#delete AppEngineServiceNetworkSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/app_engine_service_network_settings#update AppEngineServiceNetworkSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineServiceNetworkSettingsNetworkSettingsOutputReference <a name="AppEngineServiceNetworkSettingsNetworkSettingsOutputReference" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed">reset_ingress_traffic_allowed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ingress_traffic_allowed` <a name="reset_ingress_traffic_allowed" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed"></a>

```python
def reset_ingress_traffic_allowed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput">ingress_traffic_allowed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed">ingress_traffic_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_traffic_allowed_input`<sup>Optional</sup> <a name="ingress_traffic_allowed_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput"></a>

```python
ingress_traffic_allowed_input: str
```

- *Type:* str

---

##### `ingress_traffic_allowed`<sup>Required</sup> <a name="ingress_traffic_allowed" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed"></a>

```python
ingress_traffic_allowed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineServiceNetworkSettingsNetworkSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

---


### AppEngineServiceNetworkSettingsTimeoutsOutputReference <a name="AppEngineServiceNetworkSettingsTimeoutsOutputReference" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_service_network_settings

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppEngineServiceNetworkSettingsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>, cdktf.IResolvable]

---



