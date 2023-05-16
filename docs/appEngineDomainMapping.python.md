# `google_app_engine_domain_mapping`

Refer to the Terraform Registory for docs: [`google_app_engine_domain_mapping`](https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping).

# `appEngineDomainMapping` Submodule <a name="`appEngineDomainMapping` Submodule" id="@cdktf/provider-google.appEngineDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineDomainMapping <a name="AppEngineDomainMapping" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping google_app_engine_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMapping(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  id: str = None,
  override_strategy: str = None,
  project: str = None,
  ssl_settings: AppEngineDomainMappingSslSettings = None,
  timeouts: AppEngineDomainMappingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#id AppEngineDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.overrideStrategy">override_strategy</a></code> | <code>str</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#project AppEngineDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.sslSettings">ssl_settings</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.domainName"></a>

- *Type:* str

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#domain_name AppEngineDomainMapping#domain_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#id AppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override_strategy`<sup>Optional</sup> <a name="override_strategy" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.overrideStrategy"></a>

- *Type:* str

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#override_strategy AppEngineDomainMapping#override_strategy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#project AppEngineDomainMapping#project}.

---

##### `ssl_settings`<sup>Optional</sup> <a name="ssl_settings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.sslSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#ssl_settings AppEngineDomainMapping#ssl_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#timeouts AppEngineDomainMapping#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings">put_ssl_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideStrategy">reset_override_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetSslSettings">reset_ssl_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_ssl_settings` <a name="put_ssl_settings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings"></a>

```python
def put_ssl_settings(
  ssl_management_type: str,
  certificate_id: str = None
) -> None
```

###### `ssl_management_type`<sup>Required</sup> <a name="ssl_management_type" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings.parameter.sslManagementType"></a>

- *Type:* str

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#ssl_management_type AppEngineDomainMapping#ssl_management_type}

---

###### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings.parameter.certificateId"></a>

- *Type:* str

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#certificate_id AppEngineDomainMapping#certificate_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#create AppEngineDomainMapping#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#update AppEngineDomainMapping#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_override_strategy` <a name="reset_override_strategy" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideStrategy"></a>

```python
def reset_override_strategy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_ssl_settings` <a name="reset_ssl_settings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetSslSettings"></a>

```python
def reset_ssl_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.resourceRecords">resource_records</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList">AppEngineDomainMappingResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettings">ssl_settings</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference">AppEngineDomainMappingSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference">AppEngineDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategyInput">override_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettingsInput">ssl_settings_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategy">override_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_records`<sup>Required</sup> <a name="resource_records" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.resourceRecords"></a>

```python
resource_records: AppEngineDomainMappingResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList">AppEngineDomainMappingResourceRecordsList</a>

---

##### `ssl_settings`<sup>Required</sup> <a name="ssl_settings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettings"></a>

```python
ssl_settings: AppEngineDomainMappingSslSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference">AppEngineDomainMappingSslSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeouts"></a>

```python
timeouts: AppEngineDomainMappingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference">AppEngineDomainMappingTimeoutsOutputReference</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `override_strategy_input`<sup>Optional</sup> <a name="override_strategy_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategyInput"></a>

```python
override_strategy_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `ssl_settings_input`<sup>Optional</sup> <a name="ssl_settings_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettingsInput"></a>

```python
ssl_settings_input: AppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AppEngineDomainMappingTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>, cdktf.IResolvable]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `override_strategy`<sup>Required</sup> <a name="override_strategy" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategy"></a>

```python
override_strategy: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineDomainMappingConfig <a name="AppEngineDomainMappingConfig" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  id: str = None,
  override_strategy: str = None,
  project: str = None,
  ssl_settings: AppEngineDomainMappingSslSettings = None,
  timeouts: AppEngineDomainMappingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.domainName">domain_name</a></code> | <code>str</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#id AppEngineDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.overrideStrategy">override_strategy</a></code> | <code>str</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#project AppEngineDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.sslSettings">ssl_settings</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#domain_name AppEngineDomainMapping#domain_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#id AppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override_strategy`<sup>Optional</sup> <a name="override_strategy" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.overrideStrategy"></a>

```python
override_strategy: str
```

- *Type:* str

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#override_strategy AppEngineDomainMapping#override_strategy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#project AppEngineDomainMapping#project}.

---

##### `ssl_settings`<sup>Optional</sup> <a name="ssl_settings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.sslSettings"></a>

```python
ssl_settings: AppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#ssl_settings AppEngineDomainMapping#ssl_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.timeouts"></a>

```python
timeouts: AppEngineDomainMappingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#timeouts AppEngineDomainMapping#timeouts}

---

### AppEngineDomainMappingResourceRecords <a name="AppEngineDomainMappingResourceRecords" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMappingResourceRecords()
```


### AppEngineDomainMappingSslSettings <a name="AppEngineDomainMappingSslSettings" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMappingSslSettings(
  ssl_management_type: str,
  certificate_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.sslManagementType">ssl_management_type</a></code> | <code>str</code> | SSL management type for this domain. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.certificateId">certificate_id</a></code> | <code>str</code> | ID of the AuthorizedCertificate resource configuring SSL for the application. |

---

##### `ssl_management_type`<sup>Required</sup> <a name="ssl_management_type" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.sslManagementType"></a>

```python
ssl_management_type: str
```

- *Type:* str

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#ssl_management_type AppEngineDomainMapping#ssl_management_type}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#certificate_id AppEngineDomainMapping#certificate_id}

---

### AppEngineDomainMappingTimeouts <a name="AppEngineDomainMappingTimeouts" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMappingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#create AppEngineDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#update AppEngineDomainMapping#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#create AppEngineDomainMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.0/docs/resources/app_engine_domain_mapping#update AppEngineDomainMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineDomainMappingResourceRecordsList <a name="AppEngineDomainMappingResourceRecordsList" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppEngineDomainMappingResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AppEngineDomainMappingResourceRecordsOutputReference <a name="AppEngineDomainMappingResourceRecordsOutputReference" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.rrdata">rrdata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords">AppEngineDomainMappingResourceRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rrdata`<sup>Required</sup> <a name="rrdata" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.rrdata"></a>

```python
rrdata: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineDomainMappingResourceRecords
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords">AppEngineDomainMappingResourceRecords</a>

---


### AppEngineDomainMappingSslSettingsOutputReference <a name="AppEngineDomainMappingSslSettingsOutputReference" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resetCertificateId">reset_certificate_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_id` <a name="reset_certificate_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId">pending_managed_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput">ssl_management_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType">ssl_management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pending_managed_certificate_id`<sup>Required</sup> <a name="pending_managed_certificate_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId"></a>

```python
pending_managed_certificate_id: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `ssl_management_type_input`<sup>Optional</sup> <a name="ssl_management_type_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput"></a>

```python
ssl_management_type_input: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `ssl_management_type`<sup>Required</sup> <a name="ssl_management_type" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType"></a>

```python
ssl_management_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---


### AppEngineDomainMappingTimeoutsOutputReference <a name="AppEngineDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_domain_mapping

appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppEngineDomainMappingTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>, cdktf.IResolvable]

---



