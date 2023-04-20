# `google_logging_metric`

Refer to the Terraform Registory for docs: [`google_logging_metric`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric).

# `loggingMetric` Submodule <a name="`loggingMetric` Submodule" id="@cdktf/provider-google.loggingMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingMetric <a name="LoggingMetric" id="@cdktf/provider-google.loggingMetric.LoggingMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric google_logging_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetric(Construct Scope, string Id, LoggingMetricConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig">LoggingMetricConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.loggingMetric.LoggingMetric.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingMetric.LoggingMetric.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBucketOptions` <a name="PutBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions"></a>

```csharp
private void PutBucketOptions(LoggingMetricBucketOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putBucketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---

##### `PutMetricDescriptor` <a name="PutMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor"></a>

```csharp
private void PutMetricDescriptor(LoggingMetricMetricDescriptor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putMetricDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts"></a>

```csharp
private void PutTimeouts(LoggingMetricTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingMetric.LoggingMetric.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketOptions` <a name="ResetBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetBucketOptions"></a>

```csharp
private void ResetBucketOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabelExtractors` <a name="ResetLabelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetLabelExtractors"></a>

```csharp
private void ResetLabelExtractors()
```

##### `ResetMetricDescriptor` <a name="ResetMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetMetricDescriptor"></a>

```csharp
private void ResetMetricDescriptor()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValueExtractor` <a name="ResetValueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.resetValueExtractor"></a>

```csharp
private void ResetValueExtractor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingMetric.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingMetric.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingMetric.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingMetric.LoggingMetric.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptions">BucketOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference">LoggingMetricBucketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptor">MetricDescriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference">LoggingMetricMetricDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference">LoggingMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptionsInput">BucketOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractorsInput">LabelExtractorsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptorInput">MetricDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractorInput">ValueExtractorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractors">LabelExtractors</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractor">ValueExtractor</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BucketOptions`<sup>Required</sup> <a name="BucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptions"></a>

```csharp
public LoggingMetricBucketOptionsOutputReference BucketOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference">LoggingMetricBucketOptionsOutputReference</a>

---

##### `MetricDescriptor`<sup>Required</sup> <a name="MetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptor"></a>

```csharp
public LoggingMetricMetricDescriptorOutputReference MetricDescriptor { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference">LoggingMetricMetricDescriptorOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeouts"></a>

```csharp
public LoggingMetricTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference">LoggingMetricTimeoutsOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketOptionsInput`<sup>Optional</sup> <a name="BucketOptionsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketOptionsInput"></a>

```csharp
public LoggingMetricBucketOptions BucketOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelExtractorsInput`<sup>Optional</sup> <a name="LabelExtractorsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractorsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractorsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetricDescriptorInput`<sup>Optional</sup> <a name="MetricDescriptorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.metricDescriptorInput"></a>

```csharp
public LoggingMetricMetricDescriptor MetricDescriptorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValueExtractorInput`<sup>Optional</sup> <a name="ValueExtractorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractorInput"></a>

```csharp
public string ValueExtractorInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LabelExtractors`<sup>Required</sup> <a name="LabelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.labelExtractors"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractors { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ValueExtractor`<sup>Required</sup> <a name="ValueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.valueExtractor"></a>

```csharp
public string ValueExtractor { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetric.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingMetric.LoggingMetric.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingMetricBucketOptions <a name="LoggingMetricBucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricBucketOptions {
    LoggingMetricBucketOptionsExplicitBuckets ExplicitBuckets = null,
    LoggingMetricBucketOptionsExponentialBuckets ExponentialBuckets = null,
    LoggingMetricBucketOptionsLinearBuckets LinearBuckets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.explicitBuckets">ExplicitBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | explicit_buckets block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.exponentialBuckets">ExponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | exponential_buckets block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.linearBuckets">LinearBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | linear_buckets block. |

---

##### `ExplicitBuckets`<sup>Optional</sup> <a name="ExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.explicitBuckets"></a>

```csharp
public LoggingMetricBucketOptionsExplicitBuckets ExplicitBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

explicit_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#explicit_buckets LoggingMetric#explicit_buckets}

---

##### `ExponentialBuckets`<sup>Optional</sup> <a name="ExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.exponentialBuckets"></a>

```csharp
public LoggingMetricBucketOptionsExponentialBuckets ExponentialBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

exponential_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#exponential_buckets LoggingMetric#exponential_buckets}

---

##### `LinearBuckets`<sup>Optional</sup> <a name="LinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions.property.linearBuckets"></a>

```csharp
public LoggingMetricBucketOptionsLinearBuckets LinearBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

linear_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#linear_buckets LoggingMetric#linear_buckets}

---

### LoggingMetricBucketOptionsExplicitBuckets <a name="LoggingMetricBucketOptionsExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricBucketOptionsExplicitBuckets {
    double[] Bounds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.property.bounds">Bounds</a></code> | <code>double[]</code> | The values must be monotonically increasing. |

---

##### `Bounds`<sup>Required</sup> <a name="Bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets.property.bounds"></a>

```csharp
public double[] Bounds { get; set; }
```

- *Type:* double[]

The values must be monotonically increasing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#bounds LoggingMetric#bounds}

---

### LoggingMetricBucketOptionsExponentialBuckets <a name="LoggingMetricBucketOptionsExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricBucketOptionsExponentialBuckets {
    double GrowthFactor = null,
    double NumFiniteBuckets = null,
    double Scale = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.growthFactor">GrowthFactor</a></code> | <code>double</code> | Must be greater than 1. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>double</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.scale">Scale</a></code> | <code>double</code> | Must be greater than 0. |

---

##### `GrowthFactor`<sup>Optional</sup> <a name="GrowthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.growthFactor"></a>

```csharp
public double GrowthFactor { get; set; }
```

- *Type:* double

Must be greater than 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#growth_factor LoggingMetric#growth_factor}

---

##### `NumFiniteBuckets`<sup>Optional</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets"></a>

```csharp
public double NumFiniteBuckets { get; set; }
```

- *Type:* double

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

##### `Scale`<sup>Optional</sup> <a name="Scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets.property.scale"></a>

```csharp
public double Scale { get; set; }
```

- *Type:* double

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#scale LoggingMetric#scale}

---

### LoggingMetricBucketOptionsLinearBuckets <a name="LoggingMetricBucketOptionsLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricBucketOptionsLinearBuckets {
    double NumFiniteBuckets = null,
    double Offset = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>double</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.offset">Offset</a></code> | <code>double</code> | Lower bound of the first bucket. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.width">Width</a></code> | <code>double</code> | Must be greater than 0. |

---

##### `NumFiniteBuckets`<sup>Optional</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets"></a>

```csharp
public double NumFiniteBuckets { get; set; }
```

- *Type:* double

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#num_finite_buckets LoggingMetric#num_finite_buckets}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.offset"></a>

```csharp
public double Offset { get; set; }
```

- *Type:* double

Lower bound of the first bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#offset LoggingMetric#offset}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#width LoggingMetric#width}

---

### LoggingMetricConfig <a name="LoggingMetricConfig" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Filter,
    string Name,
    string BucketName = null,
    LoggingMetricBucketOptions BucketOptions = null,
    string Description = null,
    object Disabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> LabelExtractors = null,
    LoggingMetricMetricDescriptor MetricDescriptor = null,
    string Project = null,
    LoggingMetricTimeouts Timeouts = null,
    string ValueExtractor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.filter">Filter</a></code> | <code>string</code> | An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.name">Name</a></code> | <code>string</code> | The client-assigned metric identifier. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketName">BucketName</a></code> | <code>string</code> | The resource name of the Log Bucket that owns the Log Metric. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketOptions">BucketOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | bucket_options block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.description">Description</a></code> | <code>string</code> | A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.disabled">Disabled</a></code> | <code>object</code> | If set to True, then this metric is disabled and it does not generate any points. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#id LoggingMetric#id}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.labelExtractors">LabelExtractors</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.metricDescriptor">MetricDescriptor</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | metric_descriptor block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#project LoggingMetric#project}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.valueExtractor">ValueExtractor</a></code> | <code>string</code> | A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#filter LoggingMetric#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The client-assigned metric identifier.

Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#name LoggingMetric#name}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The resource name of the Log Bucket that owns the Log Metric.

Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#bucket_name LoggingMetric#bucket_name}

---

##### `BucketOptions`<sup>Optional</sup> <a name="BucketOptions" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.bucketOptions"></a>

```csharp
public LoggingMetricBucketOptions BucketOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

bucket_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#bucket_options LoggingMetric#bucket_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#description LoggingMetric#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

If set to True, then this metric is disabled and it does not generate any points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#disabled LoggingMetric#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#id LoggingMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabelExtractors`<sup>Optional</sup> <a name="LabelExtractors" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.labelExtractors"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractors { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.

Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#label_extractors LoggingMetric#label_extractors}

---

##### `MetricDescriptor`<sup>Optional</sup> <a name="MetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.metricDescriptor"></a>

```csharp
public LoggingMetricMetricDescriptor MetricDescriptor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

metric_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#metric_descriptor LoggingMetric#metric_descriptor}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#project LoggingMetric#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.timeouts"></a>

```csharp
public LoggingMetricTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts">LoggingMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#timeouts LoggingMetric#timeouts}

---

##### `ValueExtractor`<sup>Optional</sup> <a name="ValueExtractor" id="@cdktf/provider-google.loggingMetric.LoggingMetricConfig.property.valueExtractor"></a>

```csharp
public string ValueExtractor { get; set; }
```

- *Type:* string

A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry.

Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#value_extractor LoggingMetric#value_extractor}

---

### LoggingMetricMetricDescriptor <a name="LoggingMetricMetricDescriptor" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricMetricDescriptor {
    string MetricKind,
    string ValueType,
    string DisplayName = null,
    object Labels = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.metricKind">MetricKind</a></code> | <code>string</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.valueType">ValueType</a></code> | <code>string</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.displayName">DisplayName</a></code> | <code>string</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.unit">Unit</a></code> | <code>string</code> | The unit in which the metric value is reported. |

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.metricKind"></a>

```csharp
public string MetricKind { get; set; }
```

- *Type:* string

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#metric_kind LoggingMetric#metric_kind}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#value_type LoggingMetric#value_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case
without an ending period, for example "Request count". This field is optional but it is
recommended to be set for any metrics associated with user-visible concepts, such as Quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#display_name LoggingMetric#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#labels LoggingMetric#labels}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit in which the metric value is reported.

It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#unit LoggingMetric#unit}

---

### LoggingMetricMetricDescriptorLabels <a name="LoggingMetricMetricDescriptorLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricMetricDescriptorLabels {
    string Key,
    string Description = null,
    string ValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.key">Key</a></code> | <code>string</code> | The label key. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.description">Description</a></code> | <code>string</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.valueType">ValueType</a></code> | <code>string</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#key LoggingMetric#key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#description LoggingMetric#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabels.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#value_type LoggingMetric#value_type}

---

### LoggingMetricTimeouts <a name="LoggingMetricTimeouts" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#create LoggingMetric#create}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#delete LoggingMetric#delete}. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#update LoggingMetric#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#create LoggingMetric#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#delete LoggingMetric#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_metric#update LoggingMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingMetricBucketOptionsExplicitBucketsOutputReference <a name="LoggingMetricBucketOptionsExplicitBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricBucketOptionsExplicitBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput">BoundsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds">Bounds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoundsInput`<sup>Optional</sup> <a name="BoundsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput"></a>

```csharp
public double[] BoundsInput { get; }
```

- *Type:* double[]

---

##### `Bounds`<sup>Required</sup> <a name="Bounds" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds"></a>

```csharp
public double[] Bounds { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue"></a>

```csharp
public LoggingMetricBucketOptionsExplicitBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---


### LoggingMetricBucketOptionsExponentialBucketsOutputReference <a name="LoggingMetricBucketOptionsExponentialBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricBucketOptionsExponentialBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrowthFactor` <a name="ResetGrowthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetGrowthFactor"></a>

```csharp
private void ResetGrowthFactor()
```

##### `ResetNumFiniteBuckets` <a name="ResetNumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetNumFiniteBuckets"></a>

```csharp
private void ResetNumFiniteBuckets()
```

##### `ResetScale` <a name="ResetScale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.resetScale"></a>

```csharp
private void ResetScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput">GrowthFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput">NumFiniteBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput">ScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor">GrowthFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale">Scale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrowthFactorInput`<sup>Optional</sup> <a name="GrowthFactorInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput"></a>

```csharp
public double GrowthFactorInput { get; }
```

- *Type:* double

---

##### `NumFiniteBucketsInput`<sup>Optional</sup> <a name="NumFiniteBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput"></a>

```csharp
public double NumFiniteBucketsInput { get; }
```

- *Type:* double

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput"></a>

```csharp
public double ScaleInput { get; }
```

- *Type:* double

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor"></a>

```csharp
public double GrowthFactor { get; }
```

- *Type:* double

---

##### `NumFiniteBuckets`<sup>Required</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets"></a>

```csharp
public double NumFiniteBuckets { get; }
```

- *Type:* double

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale"></a>

```csharp
public double Scale { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue"></a>

```csharp
public LoggingMetricBucketOptionsExponentialBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---


### LoggingMetricBucketOptionsLinearBucketsOutputReference <a name="LoggingMetricBucketOptionsLinearBucketsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricBucketOptionsLinearBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumFiniteBuckets` <a name="ResetNumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetNumFiniteBuckets"></a>

```csharp
private void ResetNumFiniteBuckets()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput">NumFiniteBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput">OffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumFiniteBucketsInput`<sup>Optional</sup> <a name="NumFiniteBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput"></a>

```csharp
public double NumFiniteBucketsInput { get; }
```

- *Type:* double

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput"></a>

```csharp
public double OffsetInput { get; }
```

- *Type:* double

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `NumFiniteBuckets`<sup>Required</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets"></a>

```csharp
public double NumFiniteBuckets { get; }
```

- *Type:* double

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue"></a>

```csharp
public LoggingMetricBucketOptionsLinearBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---


### LoggingMetricBucketOptionsOutputReference <a name="LoggingMetricBucketOptionsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricBucketOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExplicitBuckets` <a name="PutExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets"></a>

```csharp
private void PutExplicitBuckets(LoggingMetricBucketOptionsExplicitBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExplicitBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `PutExponentialBuckets` <a name="PutExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets"></a>

```csharp
private void PutExponentialBuckets(LoggingMetricBucketOptionsExponentialBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putExponentialBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `PutLinearBuckets` <a name="PutLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets"></a>

```csharp
private void PutLinearBuckets(LoggingMetricBucketOptionsLinearBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.putLinearBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---

##### `ResetExplicitBuckets` <a name="ResetExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExplicitBuckets"></a>

```csharp
private void ResetExplicitBuckets()
```

##### `ResetExponentialBuckets` <a name="ResetExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetExponentialBuckets"></a>

```csharp
private void ResetExponentialBuckets()
```

##### `ResetLinearBuckets` <a name="ResetLinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.resetLinearBuckets"></a>

```csharp
private void ResetLinearBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBuckets">ExplicitBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference">LoggingMetricBucketOptionsExplicitBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBuckets">ExponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference">LoggingMetricBucketOptionsExponentialBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBuckets">LinearBuckets</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference">LoggingMetricBucketOptionsLinearBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput">ExplicitBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput">ExponentialBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBucketsInput">LinearBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExplicitBuckets`<sup>Required</sup> <a name="ExplicitBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBuckets"></a>

```csharp
public LoggingMetricBucketOptionsExplicitBucketsOutputReference ExplicitBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBucketsOutputReference">LoggingMetricBucketOptionsExplicitBucketsOutputReference</a>

---

##### `ExponentialBuckets`<sup>Required</sup> <a name="ExponentialBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBuckets"></a>

```csharp
public LoggingMetricBucketOptionsExponentialBucketsOutputReference ExponentialBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBucketsOutputReference">LoggingMetricBucketOptionsExponentialBucketsOutputReference</a>

---

##### `LinearBuckets`<sup>Required</sup> <a name="LinearBuckets" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBuckets"></a>

```csharp
public LoggingMetricBucketOptionsLinearBucketsOutputReference LinearBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBucketsOutputReference">LoggingMetricBucketOptionsLinearBucketsOutputReference</a>

---

##### `ExplicitBucketsInput`<sup>Optional</sup> <a name="ExplicitBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput"></a>

```csharp
public LoggingMetricBucketOptionsExplicitBuckets ExplicitBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExplicitBuckets">LoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `ExponentialBucketsInput`<sup>Optional</sup> <a name="ExponentialBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput"></a>

```csharp
public LoggingMetricBucketOptionsExponentialBuckets ExponentialBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsExponentialBuckets">LoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `LinearBucketsInput`<sup>Optional</sup> <a name="LinearBucketsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.linearBucketsInput"></a>

```csharp
public LoggingMetricBucketOptionsLinearBuckets LinearBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsLinearBuckets">LoggingMetricBucketOptionsLinearBuckets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptionsOutputReference.property.internalValue"></a>

```csharp
public LoggingMetricBucketOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricBucketOptions">LoggingMetricBucketOptions</a>

---


### LoggingMetricMetricDescriptorLabelsList <a name="LoggingMetricMetricDescriptorLabelsList" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricMetricDescriptorLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get"></a>

```csharp
private LoggingMetricMetricDescriptorLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoggingMetricMetricDescriptorLabelsOutputReference <a name="LoggingMetricMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricMetricDescriptorLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.resetValueType"></a>

```csharp
private void ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoggingMetricMetricDescriptorOutputReference <a name="LoggingMetricMetricDescriptorOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricMetricDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.putLabels.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList">LoggingMetricMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKindInput">MetricKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKind">MetricKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labels"></a>

```csharp
public LoggingMetricMetricDescriptorLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorLabelsList">LoggingMetricMetricDescriptorLabelsList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `MetricKindInput`<sup>Optional</sup> <a name="MetricKindInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKindInput"></a>

```csharp
public string MetricKindInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.metricKind"></a>

```csharp
public string MetricKind { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptorOutputReference.property.internalValue"></a>

```csharp
public LoggingMetricMetricDescriptor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingMetric.LoggingMetricMetricDescriptor">LoggingMetricMetricDescriptor</a>

---


### LoggingMetricTimeoutsOutputReference <a name="LoggingMetricTimeoutsOutputReference" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingMetricTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingMetric.LoggingMetricTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



