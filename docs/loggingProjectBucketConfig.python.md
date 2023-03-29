# `loggingProjectBucketConfig` Submodule <a name="`loggingProjectBucketConfig` Submodule" id="@cdktf/provider-google.loggingProjectBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingProjectBucketConfig <a name="LoggingProjectBucketConfig" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config google_logging_project_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_bucket_config

loggingProjectBucketConfig.LoggingProjectBucketConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_id: str,
  location: str,
  project: str,
  cmek_settings: LoggingProjectBucketConfigCmekSettings = None,
  description: str = None,
  enable_analytics: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.bucketId">bucket_id</a></code> | <code>str</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | The parent project that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.cmekSettings">cmek_settings</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.enableAnalytics">enable_analytics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable log analytics for the bucket. Cannot be disabled once enabled. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#id LoggingProjectBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_id`<sup>Required</sup> <a name="bucket_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.bucketId"></a>

- *Type:* str

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#bucket_id LoggingProjectBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#location LoggingProjectBucketConfig#location}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.project"></a>

- *Type:* str

The parent project that contains the logging bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#project LoggingProjectBucketConfig#project}

---

##### `cmek_settings`<sup>Optional</sup> <a name="cmek_settings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.cmekSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#cmek_settings LoggingProjectBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.description"></a>

- *Type:* str

An optional description for this bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#description LoggingProjectBucketConfig#description}

---

##### `enable_analytics`<sup>Optional</sup> <a name="enable_analytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.enableAnalytics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable log analytics for the bucket. Cannot be disabled once enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#enable_analytics LoggingProjectBucketConfig#enable_analytics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#id LoggingProjectBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.Initializer.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#retention_days LoggingProjectBucketConfig#retention_days}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings">put_cmek_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetCmekSettings">reset_cmek_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetEnableAnalytics">reset_enable_analytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetRetentionDays">reset_retention_days</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cmek_settings` <a name="put_cmek_settings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings"></a>

```python
def put_cmek_settings(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.putCmekSettings.parameter.kmsKeyName"></a>

- *Type:* str

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#kms_key_name LoggingProjectBucketConfig#kms_key_name}

---

##### `reset_cmek_settings` <a name="reset_cmek_settings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetCmekSettings"></a>

```python
def reset_cmek_settings() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_analytics` <a name="reset_enable_analytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetEnableAnalytics"></a>

```python
def reset_enable_analytics() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import logging_project_bucket_config

loggingProjectBucketConfig.LoggingProjectBucketConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import logging_project_bucket_config

loggingProjectBucketConfig.LoggingProjectBucketConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import logging_project_bucket_config

loggingProjectBucketConfig.LoggingProjectBucketConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettings">cmek_settings</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference">LoggingProjectBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketIdInput">bucket_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettingsInput">cmek_settings_input</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalyticsInput">enable_analytics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketId">bucket_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalytics">enable_analytics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cmek_settings`<sup>Required</sup> <a name="cmek_settings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettings"></a>

```python
cmek_settings: LoggingProjectBucketConfigCmekSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference">LoggingProjectBucketConfigCmekSettingsOutputReference</a>

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `bucket_id_input`<sup>Optional</sup> <a name="bucket_id_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketIdInput"></a>

```python
bucket_id_input: str
```

- *Type:* str

---

##### `cmek_settings_input`<sup>Optional</sup> <a name="cmek_settings_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.cmekSettingsInput"></a>

```python
cmek_settings_input: LoggingProjectBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_analytics_input`<sup>Optional</sup> <a name="enable_analytics_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalyticsInput"></a>

```python
enable_analytics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket_id`<sup>Required</sup> <a name="bucket_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.bucketId"></a>

```python
bucket_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_analytics`<sup>Required</sup> <a name="enable_analytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.enableAnalytics"></a>

```python
enable_analytics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingProjectBucketConfigCmekSettings <a name="LoggingProjectBucketConfigCmekSettings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_bucket_config

loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name for the configured Cloud KMS key. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#kms_key_name LoggingProjectBucketConfig#kms_key_name}

---

### LoggingProjectBucketConfigConfig <a name="LoggingProjectBucketConfigConfig" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_bucket_config

loggingProjectBucketConfig.LoggingProjectBucketConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_id: str,
  location: str,
  project: str,
  cmek_settings: LoggingProjectBucketConfigCmekSettings = None,
  description: str = None,
  enable_analytics: typing.Union[bool, IResolvable] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.bucketId">bucket_id</a></code> | <code>str</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.location">location</a></code> | <code>str</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.project">project</a></code> | <code>str</code> | The parent project that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.cmekSettings">cmek_settings</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.description">description</a></code> | <code>str</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.enableAnalytics">enable_analytics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable log analytics for the bucket. Cannot be disabled once enabled. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#id LoggingProjectBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_id`<sup>Required</sup> <a name="bucket_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.bucketId"></a>

```python
bucket_id: str
```

- *Type:* str

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#bucket_id LoggingProjectBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#location LoggingProjectBucketConfig#location}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The parent project that contains the logging bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#project LoggingProjectBucketConfig#project}

---

##### `cmek_settings`<sup>Optional</sup> <a name="cmek_settings" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.cmekSettings"></a>

```python
cmek_settings: LoggingProjectBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#cmek_settings LoggingProjectBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description for this bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#description LoggingProjectBucketConfig#description}

---

##### `enable_analytics`<sup>Optional</sup> <a name="enable_analytics" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.enableAnalytics"></a>

```python
enable_analytics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable log analytics for the bucket. Cannot be disabled once enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#enable_analytics LoggingProjectBucketConfig#enable_analytics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#id LoggingProjectBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#retention_days LoggingProjectBucketConfig#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingProjectBucketConfigCmekSettingsOutputReference <a name="LoggingProjectBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_bucket_config

loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kms_key_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version_name`<sup>Required</sup> <a name="kms_key_version_name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```python
kms_key_version_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```python
internal_value: LoggingProjectBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectBucketConfig.LoggingProjectBucketConfigCmekSettings">LoggingProjectBucketConfigCmekSettings</a>

---



