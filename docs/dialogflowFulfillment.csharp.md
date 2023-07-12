# `google_dialogflow_fulfillment`

Refer to the Terraform Registory for docs: [`google_dialogflow_fulfillment`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment).

# `dialogflowFulfillment` Submodule <a name="`dialogflowFulfillment` Submodule" id="@cdktf/provider-google.dialogflowFulfillment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowFulfillment <a name="DialogflowFulfillment" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment google_dialogflow_fulfillment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillment(Construct Scope, string Id, DialogflowFulfillmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig">DialogflowFulfillmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig">DialogflowFulfillmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures">PutFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetFeatures">ResetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFeatures` <a name="PutFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures"></a>

```csharp
private void PutFeatures(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures.parameter.value"></a>

- *Type:* object

---

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService"></a>

```csharp
private void PutGenericWebService(DialogflowFulfillmentGenericWebService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowFulfillmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetFeatures"></a>

```csharp
private void ResetFeatures()
```

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetGenericWebService"></a>

```csharp
private void ResetGenericWebService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowFulfillment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowFulfillment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowFulfillment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.features">Features</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList">DialogflowFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference">DialogflowFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference">DialogflowFulfillmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.featuresInput">FeaturesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.features"></a>

```csharp
public DialogflowFulfillmentFeaturesList Features { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList">DialogflowFulfillmentFeaturesList</a>

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebService"></a>

```csharp
public DialogflowFulfillmentGenericWebServiceOutputReference GenericWebService { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference">DialogflowFulfillmentGenericWebServiceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeouts"></a>

```csharp
public DialogflowFulfillmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference">DialogflowFulfillmentTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.featuresInput"></a>

```csharp
public object FeaturesInput { get; }
```

- *Type:* object

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebServiceInput"></a>

```csharp
public DialogflowFulfillmentGenericWebService GenericWebServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowFulfillmentConfig <a name="DialogflowFulfillmentConfig" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    object Enabled = null,
    object Features = null,
    DialogflowFulfillmentGenericWebService GenericWebService = null,
    string Id = null,
    string Project = null,
    DialogflowFulfillmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether fulfillment is enabled. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.features">Features</a></code> | <code>object</code> | features block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#id DialogflowFulfillment#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#project DialogflowFulfillment#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#display_name DialogflowFulfillment#display_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether fulfillment is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#enabled DialogflowFulfillment#enabled}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.features"></a>

```csharp
public object Features { get; set; }
```

- *Type:* object

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#features DialogflowFulfillment#features}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.genericWebService"></a>

```csharp
public DialogflowFulfillmentGenericWebService GenericWebService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#generic_web_service DialogflowFulfillment#generic_web_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#id DialogflowFulfillment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#project DialogflowFulfillment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.timeouts"></a>

```csharp
public DialogflowFulfillmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#timeouts DialogflowFulfillment#timeouts}

---

### DialogflowFulfillmentFeatures <a name="DialogflowFulfillmentFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillmentFeatures {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.property.type">Type</a></code> | <code>string</code> | The type of the feature that enabled for fulfillment. SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the feature that enabled for fulfillment. SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#type DialogflowFulfillment#type}

---

### DialogflowFulfillmentGenericWebService <a name="DialogflowFulfillmentGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillmentGenericWebService {
    string Uri,
    string Password = null,
    System.Collections.Generic.IDictionary<string, string> RequestHeaders = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.uri">Uri</a></code> | <code>string</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.password">Password</a></code> | <code>string</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.username">Username</a></code> | <code>string</code> | The user name for HTTP Basic authentication. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#uri DialogflowFulfillment#uri}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#password DialogflowFulfillment#password}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#request_headers DialogflowFulfillment#request_headers}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#username DialogflowFulfillment#username}

---

### DialogflowFulfillmentTimeouts <a name="DialogflowFulfillmentTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#create DialogflowFulfillment#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#delete DialogflowFulfillment#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#update DialogflowFulfillment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#create DialogflowFulfillment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#delete DialogflowFulfillment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_fulfillment#update DialogflowFulfillment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowFulfillmentFeaturesList <a name="DialogflowFulfillmentFeaturesList" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillmentFeaturesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get"></a>

```csharp
private DialogflowFulfillmentFeaturesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowFulfillmentFeaturesOutputReference <a name="DialogflowFulfillmentFeaturesOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillmentFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowFulfillmentGenericWebServiceOutputReference <a name="DialogflowFulfillmentGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillmentGenericWebServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```csharp
public DialogflowFulfillmentGenericWebService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---


### DialogflowFulfillmentTimeoutsOutputReference <a name="DialogflowFulfillmentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowFulfillmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



