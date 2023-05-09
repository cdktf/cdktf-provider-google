# `google_logging_metric`

Refer to the Terraform Registory for docs: [`google_logging_metric`](https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric).

# `loggingMetric` Submodule <a name="`loggingMetric` Submodule" id="@cdktf/provider-google.loggingMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingMetric <a name="LoggingMetric" id="@cdktf/provider-google.loggingMetric.LoggingMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric google_logging_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetric(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str,
  name: str,
  bucket_name: str = None,
  bucket_options: LoggingMetricBucketOptions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  label_extractors: typing.Mapping[str] = None,
  metric_descriptor: LoggingMetricMetricDescriptor = None,
  project: str = None,
  timeouts: LoggingMetricTimeouts = None,
  value_extractor: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.filter">filter</a></code> | <code>str</code> | An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.name">name</a></code> | <code>str</code> | The client-assigned metric identifier. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | The resource name of the Log Bucket that owns the Log Metric. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.bucketOptions">bucket_options</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | bucket_options block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this metric is disabled and it does not generate any points. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#id LoggingMetric#id}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.labelExtractors">label_extractors</a></code> | <code>typing.Mapping[str]</code> | A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.metricDescriptor">metric_descriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | metric_descriptor block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#project LoggingMetric#project}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.valueExtractor">value_extractor</a></code> | <code>str</code> | A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.filter"></a>

- *Type:* str

An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#filter LoggingMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.name"></a>

- *Type:* str

The client-assigned metric identifier.

Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#name LoggingMetric#name}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.bucketName"></a>

- *Type:* str

The resource name of the Log Bucket that owns the Log Metric.

Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#bucket_name LoggingMetric#bucket_name}

---

##### `bucket_options`<sup>Optional</sup> <a name="bucket_options" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.bucketOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

bucket_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#bucket_options LoggingMetric#bucket_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.description"></a>

- *Type:* str

A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#description LoggingMetric#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this metric is disabled and it does not generate any points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#disabled LoggingMetric#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#id LoggingMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label_extractors`<sup>Optional</sup> <a name="label_extractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.labelExtractors"></a>

- *Type:* typing.Mapping[str]

A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.

Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#label_extractors LoggingMetric#label_extractors}

---

##### `metric_descriptor`<sup>Optional</sup> <a name="metric_descriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.metricDescriptor"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

metric_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#metric_descriptor LoggingMetric#metric_descriptor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#project LoggingMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#timeouts LoggingMetric#timeouts}

---

##### `value_extractor`<sup>Optional</sup> <a name="value_extractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.valueExtractor"></a>

- *Type:* str

A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry.

Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#value_extractor LoggingMetric#value_extractor}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions">put_bucket_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor">put_metric_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketOptions">reset_bucket_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetLabelExtractors">reset_label_extractors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetMetricDescriptor">reset_metric_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetValueExtractor">reset_value_extractor</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bucket_options` <a name="put_bucket_options" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions"></a>

```python
def put_bucket_options(
  explicit_buckets: LoggingMetricBucketOptionsExplicitBuckets = None,
  exponential_buckets: LoggingMetricBucketOptionsExponentialBuckets = None,
  linear_buckets: LoggingMetricBucketOptionsLinearBuckets = None
) -> None
```

###### `explicit_buckets`<sup>Optional</sup> <a name="explicit_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions.parameter.explicitBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

explicit_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#explicit_buckets LoggingMetric#explicit_buckets}

---

###### `exponential_buckets`<sup>Optional</sup> <a name="exponential_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions.parameter.exponentialBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

exponential_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#exponential_buckets LoggingMetric#exponential_buckets}

---

###### `linear_buckets`<sup>Optional</sup> <a name="linear_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions.parameter.linearBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

linear_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#linear_buckets LoggingMetric#linear_buckets}

---

##### `put_metric_descriptor` <a name="put_metric_descriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor"></a>

```python
def put_metric_descriptor(
  metric_kind: str,
  value_type: str,
  display_name: str = None,
  labels: typing.Union[IResolvable, typing.List[LoggingMetricMetricDescriptorLabels]] = None,
  unit: str = None
) -> None
```

###### `metric_kind`<sup>Required</sup> <a name="metric_kind" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor.parameter.metricKind"></a>

- *Type:* str

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#metric_kind LoggingMetric#metric_kind}

---

###### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor.parameter.valueType"></a>

- *Type:* str

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#value_type LoggingMetric#value_type}

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor.parameter.displayName"></a>

- *Type:* str

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case
without an ending period, for example "Request count". This field is optional but it is
recommended to be set for any metrics associated with user-visible concepts, such as Quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#display_name LoggingMetric#display_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#labels LoggingMetric#labels}

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor.parameter.unit"></a>

- *Type:* str

The unit in which the metric value is reported.

It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#unit LoggingMetric#unit}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#create LoggingMetric#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#delete LoggingMetric#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#update LoggingMetric#update}.

---

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_options` <a name="reset_bucket_options" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketOptions"></a>

```python
def reset_bucket_options() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_label_extractors` <a name="reset_label_extractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetLabelExtractors"></a>

```python
def reset_label_extractors() -> None
```

##### `reset_metric_descriptor` <a name="reset_metric_descriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetMetricDescriptor"></a>

```python
def reset_metric_descriptor() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_value_extractor` <a name="reset_value_extractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetValueExtractor"></a>

```python
def reset_value_extractor() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetric.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptions">bucket_options</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference">LoggingMetricBucketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptor">metric_descriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference">LoggingMetricMetricDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference">LoggingMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptionsInput">bucket_options_input</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractorsInput">label_extractors_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptorInput">metric_descriptor_input</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractorInput">value_extractor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractors">label_extractors</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractor">value_extractor</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_options`<sup>Required</sup> <a name="bucket_options" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptions"></a>

```python
bucket_options: LoggingMetricBucketOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference">LoggingMetricBucketOptionsOutputReference</a>

---

##### `metric_descriptor`<sup>Required</sup> <a name="metric_descriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptor"></a>

```python
metric_descriptor: LoggingMetricMetricDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference">LoggingMetricMetricDescriptorOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeouts"></a>

```python
timeouts: LoggingMetricTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference">LoggingMetricTimeoutsOutputReference</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_options_input`<sup>Optional</sup> <a name="bucket_options_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptionsInput"></a>

```python
bucket_options_input: LoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_extractors_input`<sup>Optional</sup> <a name="label_extractors_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractorsInput"></a>

```python
label_extractors_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metric_descriptor_input`<sup>Optional</sup> <a name="metric_descriptor_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptorInput"></a>

```python
metric_descriptor_input: LoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LoggingMetricTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>, cdktf.IResolvable]

---

##### `value_extractor_input`<sup>Optional</sup> <a name="value_extractor_input" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractorInput"></a>

```python
value_extractor_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label_extractors`<sup>Required</sup> <a name="label_extractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractors"></a>

```python
label_extractors: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `value_extractor`<sup>Required</sup> <a name="value_extractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractor"></a>

```python
value_extractor: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingMetricBucketOptions <a name="LoggingMetricBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricBucketOptions(
  explicit_buckets: LoggingMetricBucketOptionsExplicitBuckets = None,
  exponential_buckets: LoggingMetricBucketOptionsExponentialBuckets = None,
  linear_buckets: LoggingMetricBucketOptionsLinearBuckets = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.explicitBuckets">explicit_buckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | explicit_buckets block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.exponentialBuckets">exponential_buckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | exponential_buckets block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.linearBuckets">linear_buckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | linear_buckets block. |

---

##### `explicit_buckets`<sup>Optional</sup> <a name="explicit_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.explicitBuckets"></a>

```python
explicit_buckets: LoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

explicit_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#explicit_buckets LoggingMetric#explicit_buckets}

---

##### `exponential_buckets`<sup>Optional</sup> <a name="exponential_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.exponentialBuckets"></a>

```python
exponential_buckets: LoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

exponential_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#exponential_buckets LoggingMetric#exponential_buckets}

---

##### `linear_buckets`<sup>Optional</sup> <a name="linear_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.linearBuckets"></a>

```python
linear_buckets: LoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

linear_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#linear_buckets LoggingMetric#linear_buckets}

---

### LoggingMetricBucketOptionsExplicitBuckets <a name="LoggingMetricBucketOptionsExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricBucketOptionsExplicitBuckets(
  bounds: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.property.bounds">bounds</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The values must be monotonically increasing. |

---

##### `bounds`<sup>Required</sup> <a name="bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.property.bounds"></a>

```python
bounds: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The values must be monotonically increasing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#bounds LoggingMetric#bounds}

---

### LoggingMetricBucketOptionsExponentialBuckets <a name="LoggingMetricBucketOptionsExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricBucketOptionsExponentialBuckets(
  growth_factor: typing.Union[int, float] = None,
  num_finite_buckets: typing.Union[int, float] = None,
  scale: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.growthFactor">growth_factor</a></code> | <code>typing.Union[int, float]</code> | Must be greater than 1. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets">num_finite_buckets</a></code> | <code>typing.Union[int, float]</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | Must be greater than 0. |

---

##### `growth_factor`<sup>Optional</sup> <a name="growth_factor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.growthFactor"></a>

```python
growth_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Must be greater than 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#growth_factor LoggingMetric#growth_factor}

---

##### `num_finite_buckets`<sup>Optional</sup> <a name="num_finite_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets"></a>

```python
num_finite_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#scale LoggingMetric#scale}

---

### LoggingMetricBucketOptionsLinearBuckets <a name="LoggingMetricBucketOptionsLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricBucketOptionsLinearBuckets(
  num_finite_buckets: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None,
  width: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets">num_finite_buckets</a></code> | <code>typing.Union[int, float]</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Lower bound of the first bucket. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.width">width</a></code> | <code>typing.Union[int, float]</code> | Must be greater than 0. |

---

##### `num_finite_buckets`<sup>Optional</sup> <a name="num_finite_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets"></a>

```python
num_finite_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lower bound of the first bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#offset LoggingMetric#offset}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#width LoggingMetric#width}

---

### LoggingMetricConfig <a name="LoggingMetricConfig" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str,
  name: str,
  bucket_name: str = None,
  bucket_options: LoggingMetricBucketOptions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  label_extractors: typing.Mapping[str] = None,
  metric_descriptor: LoggingMetricMetricDescriptor = None,
  project: str = None,
  timeouts: LoggingMetricTimeouts = None,
  value_extractor: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.filter">filter</a></code> | <code>str</code> | An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.name">name</a></code> | <code>str</code> | The client-assigned metric identifier. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The resource name of the Log Bucket that owns the Log Metric. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketOptions">bucket_options</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | bucket_options block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.description">description</a></code> | <code>str</code> | A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this metric is disabled and it does not generate any points. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#id LoggingMetric#id}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.labelExtractors">label_extractors</a></code> | <code>typing.Mapping[str]</code> | A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.metricDescriptor">metric_descriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | metric_descriptor block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#project LoggingMetric#project}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.valueExtractor">value_extractor</a></code> | <code>str</code> | A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#filter LoggingMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The client-assigned metric identifier.

Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#name LoggingMetric#name}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The resource name of the Log Bucket that owns the Log Metric.

Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#bucket_name LoggingMetric#bucket_name}

---

##### `bucket_options`<sup>Optional</sup> <a name="bucket_options" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketOptions"></a>

```python
bucket_options: LoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

bucket_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#bucket_options LoggingMetric#bucket_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#description LoggingMetric#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this metric is disabled and it does not generate any points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#disabled LoggingMetric#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#id LoggingMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label_extractors`<sup>Optional</sup> <a name="label_extractors" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.labelExtractors"></a>

```python
label_extractors: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.

Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#label_extractors LoggingMetric#label_extractors}

---

##### `metric_descriptor`<sup>Optional</sup> <a name="metric_descriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.metricDescriptor"></a>

```python
metric_descriptor: LoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

metric_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#metric_descriptor LoggingMetric#metric_descriptor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#project LoggingMetric#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.timeouts"></a>

```python
timeouts: LoggingMetricTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#timeouts LoggingMetric#timeouts}

---

##### `value_extractor`<sup>Optional</sup> <a name="value_extractor" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.valueExtractor"></a>

```python
value_extractor: str
```

- *Type:* str

A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry.

Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#value_extractor LoggingMetric#value_extractor}

---

### LoggingMetricMetricDescriptor <a name="LoggingMetricMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricMetricDescriptor(
  metric_kind: str,
  value_type: str,
  display_name: str = None,
  labels: typing.Union[IResolvable, typing.List[LoggingMetricMetricDescriptorLabels]] = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.metricKind">metric_kind</a></code> | <code>str</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.valueType">value_type</a></code> | <code>str</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.displayName">display_name</a></code> | <code>str</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.unit">unit</a></code> | <code>str</code> | The unit in which the metric value is reported. |

---

##### `metric_kind`<sup>Required</sup> <a name="metric_kind" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.metricKind"></a>

```python
metric_kind: str
```

- *Type:* str

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#metric_kind LoggingMetric#metric_kind}

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#value_type LoggingMetric#value_type}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case
without an ending period, for example "Request count". This field is optional but it is
recommended to be set for any metrics associated with user-visible concepts, such as Quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#display_name LoggingMetric#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[LoggingMetricMetricDescriptorLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#labels LoggingMetric#labels}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit in which the metric value is reported.

It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#unit LoggingMetric#unit}

---

### LoggingMetricMetricDescriptorLabels <a name="LoggingMetricMetricDescriptorLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricMetricDescriptorLabels(
  key: str,
  description: str = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.key">key</a></code> | <code>str</code> | The label key. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.description">description</a></code> | <code>str</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.valueType">value_type</a></code> | <code>str</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.key"></a>

```python
key: str
```

- *Type:* str

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#key LoggingMetric#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#description LoggingMetric#description}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#value_type LoggingMetric#value_type}

---

### LoggingMetricTimeouts <a name="LoggingMetricTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#create LoggingMetric#create}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#delete LoggingMetric#delete}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#update LoggingMetric#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#create LoggingMetric#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#delete LoggingMetric#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#update LoggingMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingMetricBucketOptionsExplicitBucketsOutputReference <a name="LoggingMetricBucketOptionsExplicitBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput">bounds_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds">bounds</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bounds_input`<sup>Optional</sup> <a name="bounds_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput"></a>

```python
bounds_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `bounds`<sup>Required</sup> <a name="bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds"></a>

```python
bounds: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue"></a>

```python
internal_value: LoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---


### LoggingMetricBucketOptionsExponentialBucketsOutputReference <a name="LoggingMetricBucketOptionsExponentialBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetGrowthFactor">reset_growth_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetNumFiniteBuckets">reset_num_finite_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetScale">reset_scale</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_growth_factor` <a name="reset_growth_factor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetGrowthFactor"></a>

```python
def reset_growth_factor() -> None
```

##### `reset_num_finite_buckets` <a name="reset_num_finite_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetNumFiniteBuckets"></a>

```python
def reset_num_finite_buckets() -> None
```

##### `reset_scale` <a name="reset_scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetScale"></a>

```python
def reset_scale() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput">growth_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput">num_finite_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput">scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor">growth_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets">num_finite_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `growth_factor_input`<sup>Optional</sup> <a name="growth_factor_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput"></a>

```python
growth_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_finite_buckets_input`<sup>Optional</sup> <a name="num_finite_buckets_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput"></a>

```python
num_finite_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_input`<sup>Optional</sup> <a name="scale_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput"></a>

```python
scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `growth_factor`<sup>Required</sup> <a name="growth_factor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor"></a>

```python
growth_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_finite_buckets`<sup>Required</sup> <a name="num_finite_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets"></a>

```python
num_finite_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue"></a>

```python
internal_value: LoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---


### LoggingMetricBucketOptionsLinearBucketsOutputReference <a name="LoggingMetricBucketOptionsLinearBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetNumFiniteBuckets">reset_num_finite_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetOffset">reset_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetWidth">reset_width</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_num_finite_buckets` <a name="reset_num_finite_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetNumFiniteBuckets"></a>

```python
def reset_num_finite_buckets() -> None
```

##### `reset_offset` <a name="reset_offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetOffset"></a>

```python
def reset_offset() -> None
```

##### `reset_width` <a name="reset_width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetWidth"></a>

```python
def reset_width() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput">num_finite_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput">width_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets">num_finite_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `num_finite_buckets_input`<sup>Optional</sup> <a name="num_finite_buckets_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput"></a>

```python
num_finite_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_input`<sup>Optional</sup> <a name="width_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput"></a>

```python
width_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_finite_buckets`<sup>Required</sup> <a name="num_finite_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets"></a>

```python
num_finite_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue"></a>

```python
internal_value: LoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---


### LoggingMetricBucketOptionsOutputReference <a name="LoggingMetricBucketOptionsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricBucketOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets">put_explicit_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets">put_exponential_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets">put_linear_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExplicitBuckets">reset_explicit_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExponentialBuckets">reset_exponential_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetLinearBuckets">reset_linear_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_explicit_buckets` <a name="put_explicit_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets"></a>

```python
def put_explicit_buckets(
  bounds: typing.List[typing.Union[int, float]]
) -> None
```

###### `bounds`<sup>Required</sup> <a name="bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets.parameter.bounds"></a>

- *Type:* typing.List[typing.Union[int, float]]

The values must be monotonically increasing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#bounds LoggingMetric#bounds}

---

##### `put_exponential_buckets` <a name="put_exponential_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets"></a>

```python
def put_exponential_buckets(
  growth_factor: typing.Union[int, float] = None,
  num_finite_buckets: typing.Union[int, float] = None,
  scale: typing.Union[int, float] = None
) -> None
```

###### `growth_factor`<sup>Optional</sup> <a name="growth_factor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets.parameter.growthFactor"></a>

- *Type:* typing.Union[int, float]

Must be greater than 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#growth_factor LoggingMetric#growth_factor}

---

###### `num_finite_buckets`<sup>Optional</sup> <a name="num_finite_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets.parameter.numFiniteBuckets"></a>

- *Type:* typing.Union[int, float]

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

###### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets.parameter.scale"></a>

- *Type:* typing.Union[int, float]

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#scale LoggingMetric#scale}

---

##### `put_linear_buckets` <a name="put_linear_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets"></a>

```python
def put_linear_buckets(
  num_finite_buckets: typing.Union[int, float] = None,
  offset: typing.Union[int, float] = None,
  width: typing.Union[int, float] = None
) -> None
```

###### `num_finite_buckets`<sup>Optional</sup> <a name="num_finite_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets.parameter.numFiniteBuckets"></a>

- *Type:* typing.Union[int, float]

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

###### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets.parameter.offset"></a>

- *Type:* typing.Union[int, float]

Lower bound of the first bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#offset LoggingMetric#offset}

---

###### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets.parameter.width"></a>

- *Type:* typing.Union[int, float]

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/logging_metric#width LoggingMetric#width}

---

##### `reset_explicit_buckets` <a name="reset_explicit_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExplicitBuckets"></a>

```python
def reset_explicit_buckets() -> None
```

##### `reset_exponential_buckets` <a name="reset_exponential_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExponentialBuckets"></a>

```python
def reset_exponential_buckets() -> None
```

##### `reset_linear_buckets` <a name="reset_linear_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetLinearBuckets"></a>

```python
def reset_linear_buckets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBuckets">explicit_buckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference">LoggingMetricBucketOptionsExplicitBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBuckets">exponential_buckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference">LoggingMetricBucketOptionsExponentialBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBuckets">linear_buckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference">LoggingMetricBucketOptionsLinearBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput">explicit_buckets_input</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput">exponential_buckets_input</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBucketsInput">linear_buckets_input</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `explicit_buckets`<sup>Required</sup> <a name="explicit_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBuckets"></a>

```python
explicit_buckets: LoggingMetricBucketOptionsExplicitBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference">LoggingMetricBucketOptionsExplicitBucketsOutputReference</a>

---

##### `exponential_buckets`<sup>Required</sup> <a name="exponential_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBuckets"></a>

```python
exponential_buckets: LoggingMetricBucketOptionsExponentialBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference">LoggingMetricBucketOptionsExponentialBucketsOutputReference</a>

---

##### `linear_buckets`<sup>Required</sup> <a name="linear_buckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBuckets"></a>

```python
linear_buckets: LoggingMetricBucketOptionsLinearBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference">LoggingMetricBucketOptionsLinearBucketsOutputReference</a>

---

##### `explicit_buckets_input`<sup>Optional</sup> <a name="explicit_buckets_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput"></a>

```python
explicit_buckets_input: LoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `exponential_buckets_input`<sup>Optional</sup> <a name="exponential_buckets_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput"></a>

```python
exponential_buckets_input: LoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `linear_buckets_input`<sup>Optional</sup> <a name="linear_buckets_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBucketsInput"></a>

```python
linear_buckets_input: LoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---


### LoggingMetricMetricDescriptorLabelsList <a name="LoggingMetricMetricDescriptorLabelsList" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricMetricDescriptorLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoggingMetricMetricDescriptorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoggingMetricMetricDescriptorLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>]]

---


### LoggingMetricMetricDescriptorLabelsOutputReference <a name="LoggingMetricMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LoggingMetricMetricDescriptorLabels, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>, cdktf.IResolvable]

---


### LoggingMetricMetricDescriptorOutputReference <a name="LoggingMetricMetricDescriptorOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricMetricDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_labels` <a name="put_labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[LoggingMetricMetricDescriptorLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList">LoggingMetricMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKindInput">metric_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKind">metric_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labels"></a>

```python
labels: LoggingMetricMetricDescriptorLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList">LoggingMetricMetricDescriptorLabelsList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[LoggingMetricMetricDescriptorLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels">LoggingMetricMetricDescriptorLabels</a>]]

---

##### `metric_kind_input`<sup>Optional</sup> <a name="metric_kind_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKindInput"></a>

```python
metric_kind_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `metric_kind`<sup>Required</sup> <a name="metric_kind" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKind"></a>

```python
metric_kind: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: LoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---


### LoggingMetricTimeoutsOutputReference <a name="LoggingMetricTimeoutsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_metric

loggingMetric.LoggingMetricTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LoggingMetricTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>, cdktf.IResolvable]

---



