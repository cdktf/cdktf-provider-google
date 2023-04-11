# `loggingMetric` Submodule <a name="`loggingMetric` Submodule" id="@cdktf/provider-google.loggingMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingMetric <a name="LoggingMetric" id="@cdktf/provider-google.loggingMetric.LoggingMetric"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_metric google_logging_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetric(scope Construct, id *string, config LoggingMetricConfig) LoggingMetric
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig">LoggingMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig">LoggingMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions">PutBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor">PutMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketOptions">ResetBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetLabelExtractors">ResetLabelExtractors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetMetricDescriptor">ResetMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.resetValueExtractor">ResetValueExtractor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBucketOptions` <a name="PutBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions"></a>

```go
func PutBucketOptions(value LoggingMetricBucketOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---

##### `PutMetricDescriptor` <a name="PutMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor"></a>

```go
func PutMetricDescriptor(value LoggingMetricMetricDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts"></a>

```go
func PutTimeouts(value LoggingMetricTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketOptions` <a name="ResetBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketOptions"></a>

```go
func ResetBucketOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetId"></a>

```go
func ResetId()
```

##### `ResetLabelExtractors` <a name="ResetLabelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetLabelExtractors"></a>

```go
func ResetLabelExtractors()
```

##### `ResetMetricDescriptor` <a name="ResetMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetMetricDescriptor"></a>

```go
func ResetMetricDescriptor()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValueExtractor` <a name="ResetValueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetValueExtractor"></a>

```go
func ResetValueExtractor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.LoggingMetric_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.LoggingMetric_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.LoggingMetric_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptions">BucketOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference">LoggingMetricBucketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptor">MetricDescriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference">LoggingMetricMetricDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference">LoggingMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptionsInput">BucketOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractorsInput">LabelExtractorsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptorInput">MetricDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractorInput">ValueExtractorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractors">LabelExtractors</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractor">ValueExtractor</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketOptions`<sup>Required</sup> <a name="BucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptions"></a>

```go
func BucketOptions() LoggingMetricBucketOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference">LoggingMetricBucketOptionsOutputReference</a>

---

##### `MetricDescriptor`<sup>Required</sup> <a name="MetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptor"></a>

```go
func MetricDescriptor() LoggingMetricMetricDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference">LoggingMetricMetricDescriptorOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeouts"></a>

```go
func Timeouts() LoggingMetricTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference">LoggingMetricTimeoutsOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketOptionsInput`<sup>Optional</sup> <a name="BucketOptionsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptionsInput"></a>

```go
func BucketOptionsInput() LoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelExtractorsInput`<sup>Optional</sup> <a name="LabelExtractorsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractorsInput"></a>

```go
func LabelExtractorsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetricDescriptorInput`<sup>Optional</sup> <a name="MetricDescriptorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptorInput"></a>

```go
func MetricDescriptorInput() LoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueExtractorInput`<sup>Optional</sup> <a name="ValueExtractorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractorInput"></a>

```go
func ValueExtractorInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LabelExtractors`<sup>Required</sup> <a name="LabelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractors"></a>

```go
func LabelExtractors() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ValueExtractor`<sup>Required</sup> <a name="ValueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractor"></a>

```go
func ValueExtractor() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingMetricBucketOptions <a name="LoggingMetricBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

&loggingmetric.LoggingMetricBucketOptions {
	ExplicitBuckets: github.com/cdktf/cdktf-provider-google-go/google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets,
	ExponentialBuckets: github.com/cdktf/cdktf-provider-google-go/google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets,
	LinearBuckets: github.com/cdktf/cdktf-provider-google-go/google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.explicitBuckets">ExplicitBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | explicit_buckets block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.exponentialBuckets">ExponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | exponential_buckets block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.linearBuckets">LinearBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | linear_buckets block. |

---

##### `ExplicitBuckets`<sup>Optional</sup> <a name="ExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.explicitBuckets"></a>

```go
ExplicitBuckets LoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

explicit_buckets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#explicit_buckets LoggingMetric#explicit_buckets}

---

##### `ExponentialBuckets`<sup>Optional</sup> <a name="ExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.exponentialBuckets"></a>

```go
ExponentialBuckets LoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

exponential_buckets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#exponential_buckets LoggingMetric#exponential_buckets}

---

##### `LinearBuckets`<sup>Optional</sup> <a name="LinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.linearBuckets"></a>

```go
LinearBuckets LoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

linear_buckets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#linear_buckets LoggingMetric#linear_buckets}

---

### LoggingMetricBucketOptionsExplicitBuckets <a name="LoggingMetricBucketOptionsExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

&loggingmetric.LoggingMetricBucketOptionsExplicitBuckets {
	Bounds: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.property.bounds">Bounds</a></code> | <code>*[]*f64</code> | The values must be monotonically increasing. |

---

##### `Bounds`<sup>Required</sup> <a name="Bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.property.bounds"></a>

```go
Bounds *[]*f64
```

- *Type:* *[]*f64

The values must be monotonically increasing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#bounds LoggingMetric#bounds}

---

### LoggingMetricBucketOptionsExponentialBuckets <a name="LoggingMetricBucketOptionsExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

&loggingmetric.LoggingMetricBucketOptionsExponentialBuckets {
	GrowthFactor: *f64,
	NumFiniteBuckets: *f64,
	Scale: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.growthFactor">GrowthFactor</a></code> | <code>*f64</code> | Must be greater than 1. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>*f64</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.scale">Scale</a></code> | <code>*f64</code> | Must be greater than 0. |

---

##### `GrowthFactor`<sup>Optional</sup> <a name="GrowthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.growthFactor"></a>

```go
GrowthFactor *f64
```

- *Type:* *f64

Must be greater than 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#growth_factor LoggingMetric#growth_factor}

---

##### `NumFiniteBuckets`<sup>Optional</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets"></a>

```go
NumFiniteBuckets *f64
```

- *Type:* *f64

Must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

##### `Scale`<sup>Optional</sup> <a name="Scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.scale"></a>

```go
Scale *f64
```

- *Type:* *f64

Must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#scale LoggingMetric#scale}

---

### LoggingMetricBucketOptionsLinearBuckets <a name="LoggingMetricBucketOptionsLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

&loggingmetric.LoggingMetricBucketOptionsLinearBuckets {
	NumFiniteBuckets: *f64,
	Offset: *f64,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>*f64</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.offset">Offset</a></code> | <code>*f64</code> | Lower bound of the first bucket. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.width">Width</a></code> | <code>*f64</code> | Must be greater than 0. |

---

##### `NumFiniteBuckets`<sup>Optional</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets"></a>

```go
NumFiniteBuckets *f64
```

- *Type:* *f64

Must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Lower bound of the first bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#offset LoggingMetric#offset}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#width LoggingMetric#width}

---

### LoggingMetricConfig <a name="LoggingMetricConfig" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

&loggingmetric.LoggingMetricConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Name: *string,
	BucketName: *string,
	BucketOptions: github.com/cdktf/cdktf-provider-google-go/google.loggingMetric.LoggingMetricBucketOptions,
	Description: *string,
	Disabled: interface{},
	Id: *string,
	LabelExtractors: *map[string]*string,
	MetricDescriptor: github.com/cdktf/cdktf-provider-google-go/google.loggingMetric.LoggingMetricMetricDescriptor,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.loggingMetric.LoggingMetricTimeouts,
	ValueExtractor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.filter">Filter</a></code> | <code>*string</code> | An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.name">Name</a></code> | <code>*string</code> | The client-assigned metric identifier. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The resource name of the Log Bucket that owns the Log Metric. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketOptions">BucketOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | bucket_options block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.description">Description</a></code> | <code>*string</code> | A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | If set to True, then this metric is disabled and it does not generate any points. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#id LoggingMetric#id}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.labelExtractors">LabelExtractors</a></code> | <code>*map[string]*string</code> | A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.metricDescriptor">MetricDescriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | metric_descriptor block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#project LoggingMetric#project}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.valueExtractor">ValueExtractor</a></code> | <code>*string</code> | A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#filter LoggingMetric#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The client-assigned metric identifier.

Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#name LoggingMetric#name}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The resource name of the Log Bucket that owns the Log Metric.

Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#bucket_name LoggingMetric#bucket_name}

---

##### `BucketOptions`<sup>Optional</sup> <a name="BucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketOptions"></a>

```go
BucketOptions LoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

bucket_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#bucket_options LoggingMetric#bucket_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#description LoggingMetric#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If set to True, then this metric is disabled and it does not generate any points.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#disabled LoggingMetric#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#id LoggingMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabelExtractors`<sup>Optional</sup> <a name="LabelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.labelExtractors"></a>

```go
LabelExtractors *map[string]*string
```

- *Type:* *map[string]*string

A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.

Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#label_extractors LoggingMetric#label_extractors}

---

##### `MetricDescriptor`<sup>Optional</sup> <a name="MetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.metricDescriptor"></a>

```go
MetricDescriptor LoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

metric_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#metric_descriptor LoggingMetric#metric_descriptor}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#project LoggingMetric#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.timeouts"></a>

```go
Timeouts LoggingMetricTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#timeouts LoggingMetric#timeouts}

---

##### `ValueExtractor`<sup>Optional</sup> <a name="ValueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.valueExtractor"></a>

```go
ValueExtractor *string
```

- *Type:* *string

A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry.

Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_extractor LoggingMetric#value_extractor}

---

### LoggingMetricMetricDescriptor <a name="LoggingMetricMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

&loggingmetric.LoggingMetricMetricDescriptor {
	MetricKind: *string,
	ValueType: *string,
	DisplayName: *string,
	Labels: interface{},
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.metricKind">MetricKind</a></code> | <code>*string</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.valueType">ValueType</a></code> | <code>*string</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.displayName">DisplayName</a></code> | <code>*string</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.unit">Unit</a></code> | <code>*string</code> | The unit in which the metric value is reported. |

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.metricKind"></a>

```go
MetricKind *string
```

- *Type:* *string

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#metric_kind LoggingMetric#metric_kind}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_type LoggingMetric#value_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case
without an ending period, for example "Request count". This field is optional but it is
recommended to be set for any metrics associated with user-visible concepts, such as Quota.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#display_name LoggingMetric#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#labels LoggingMetric#labels}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit in which the metric value is reported.

It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#unit LoggingMetric#unit}

---

### LoggingMetricMetricDescriptorLabels <a name="LoggingMetricMetricDescriptorLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

&loggingmetric.LoggingMetricMetricDescriptorLabels {
	Key: *string,
	Description: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.key">Key</a></code> | <code>*string</code> | The label key. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.description">Description</a></code> | <code>*string</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.valueType">ValueType</a></code> | <code>*string</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#key LoggingMetric#key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description for the label.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#description LoggingMetric#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#value_type LoggingMetric#value_type}

---

### LoggingMetricTimeouts <a name="LoggingMetricTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

&loggingmetric.LoggingMetricTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#create LoggingMetric#create}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#delete LoggingMetric#delete}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#update LoggingMetric#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#create LoggingMetric#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#delete LoggingMetric#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric#update LoggingMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingMetricBucketOptionsExplicitBucketsOutputReference <a name="LoggingMetricBucketOptionsExplicitBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetricBucketOptionsExplicitBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingMetricBucketOptionsExplicitBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput">BoundsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds">Bounds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoundsInput`<sup>Optional</sup> <a name="BoundsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput"></a>

```go
func BoundsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Bounds`<sup>Required</sup> <a name="Bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds"></a>

```go
func Bounds() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---


### LoggingMetricBucketOptionsExponentialBucketsOutputReference <a name="LoggingMetricBucketOptionsExponentialBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetricBucketOptionsExponentialBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingMetricBucketOptionsExponentialBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetGrowthFactor">ResetGrowthFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetNumFiniteBuckets">ResetNumFiniteBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetScale">ResetScale</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrowthFactor` <a name="ResetGrowthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetGrowthFactor"></a>

```go
func ResetGrowthFactor()
```

##### `ResetNumFiniteBuckets` <a name="ResetNumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetNumFiniteBuckets"></a>

```go
func ResetNumFiniteBuckets()
```

##### `ResetScale` <a name="ResetScale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetScale"></a>

```go
func ResetScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput">GrowthFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput">NumFiniteBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput">ScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor">GrowthFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale">Scale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrowthFactorInput`<sup>Optional</sup> <a name="GrowthFactorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput"></a>

```go
func GrowthFactorInput() *f64
```

- *Type:* *f64

---

##### `NumFiniteBucketsInput`<sup>Optional</sup> <a name="NumFiniteBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput"></a>

```go
func NumFiniteBucketsInput() *f64
```

- *Type:* *f64

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput"></a>

```go
func ScaleInput() *f64
```

- *Type:* *f64

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor"></a>

```go
func GrowthFactor() *f64
```

- *Type:* *f64

---

##### `NumFiniteBuckets`<sup>Required</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets"></a>

```go
func NumFiniteBuckets() *f64
```

- *Type:* *f64

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale"></a>

```go
func Scale() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---


### LoggingMetricBucketOptionsLinearBucketsOutputReference <a name="LoggingMetricBucketOptionsLinearBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetricBucketOptionsLinearBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingMetricBucketOptionsLinearBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetNumFiniteBuckets">ResetNumFiniteBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumFiniteBuckets` <a name="ResetNumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetNumFiniteBuckets"></a>

```go
func ResetNumFiniteBuckets()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetWidth"></a>

```go
func ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput">NumFiniteBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumFiniteBucketsInput`<sup>Optional</sup> <a name="NumFiniteBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput"></a>

```go
func NumFiniteBucketsInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `NumFiniteBuckets`<sup>Required</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets"></a>

```go
func NumFiniteBuckets() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---


### LoggingMetricBucketOptionsOutputReference <a name="LoggingMetricBucketOptionsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetricBucketOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingMetricBucketOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets">PutExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets">PutExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets">PutLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExplicitBuckets">ResetExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExponentialBuckets">ResetExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetLinearBuckets">ResetLinearBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExplicitBuckets` <a name="PutExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets"></a>

```go
func PutExplicitBuckets(value LoggingMetricBucketOptionsExplicitBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `PutExponentialBuckets` <a name="PutExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets"></a>

```go
func PutExponentialBuckets(value LoggingMetricBucketOptionsExponentialBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `PutLinearBuckets` <a name="PutLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets"></a>

```go
func PutLinearBuckets(value LoggingMetricBucketOptionsLinearBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---

##### `ResetExplicitBuckets` <a name="ResetExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExplicitBuckets"></a>

```go
func ResetExplicitBuckets()
```

##### `ResetExponentialBuckets` <a name="ResetExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExponentialBuckets"></a>

```go
func ResetExponentialBuckets()
```

##### `ResetLinearBuckets` <a name="ResetLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetLinearBuckets"></a>

```go
func ResetLinearBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBuckets">ExplicitBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference">LoggingMetricBucketOptionsExplicitBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBuckets">ExponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference">LoggingMetricBucketOptionsExponentialBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBuckets">LinearBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference">LoggingMetricBucketOptionsLinearBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput">ExplicitBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput">ExponentialBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBucketsInput">LinearBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExplicitBuckets`<sup>Required</sup> <a name="ExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBuckets"></a>

```go
func ExplicitBuckets() LoggingMetricBucketOptionsExplicitBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference">LoggingMetricBucketOptionsExplicitBucketsOutputReference</a>

---

##### `ExponentialBuckets`<sup>Required</sup> <a name="ExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBuckets"></a>

```go
func ExponentialBuckets() LoggingMetricBucketOptionsExponentialBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference">LoggingMetricBucketOptionsExponentialBucketsOutputReference</a>

---

##### `LinearBuckets`<sup>Required</sup> <a name="LinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBuckets"></a>

```go
func LinearBuckets() LoggingMetricBucketOptionsLinearBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference">LoggingMetricBucketOptionsLinearBucketsOutputReference</a>

---

##### `ExplicitBucketsInput`<sup>Optional</sup> <a name="ExplicitBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput"></a>

```go
func ExplicitBucketsInput() LoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `ExponentialBucketsInput`<sup>Optional</sup> <a name="ExponentialBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput"></a>

```go
func ExponentialBucketsInput() LoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `LinearBucketsInput`<sup>Optional</sup> <a name="LinearBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBucketsInput"></a>

```go
func LinearBucketsInput() LoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---


### LoggingMetricMetricDescriptorLabelsList <a name="LoggingMetricMetricDescriptorLabelsList" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetricMetricDescriptorLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoggingMetricMetricDescriptorLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get"></a>

```go
func Get(index *f64) LoggingMetricMetricDescriptorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoggingMetricMetricDescriptorLabelsOutputReference <a name="LoggingMetricMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetricMetricDescriptorLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoggingMetricMetricDescriptorLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoggingMetricMetricDescriptorOutputReference <a name="LoggingMetricMetricDescriptorOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetricMetricDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingMetricMetricDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList">LoggingMetricMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKindInput">MetricKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKind">MetricKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labels"></a>

```go
func Labels() LoggingMetricMetricDescriptorLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList">LoggingMetricMetricDescriptorLabelsList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricKindInput`<sup>Optional</sup> <a name="MetricKindInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKindInput"></a>

```go
func MetricKindInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKind"></a>

```go
func MetricKind() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---


### LoggingMetricTimeoutsOutputReference <a name="LoggingMetricTimeoutsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingmetric"

loggingmetric.NewLoggingMetricTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingMetricTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



