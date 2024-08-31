# `dataGoogleClouddeployDeliveryPipelineIamPolicy` Submodule <a name="`dataGoogleClouddeployDeliveryPipelineIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleClouddeployDeliveryPipelineIamPolicy <a name="DataGoogleClouddeployDeliveryPipelineIamPolicy" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy google_clouddeploy_delivery_pipeline_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleClouddeployDeliveryPipelineIamPolicy(Construct Scope, string Id, DataGoogleClouddeployDeliveryPipelineIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig">DataGoogleClouddeployDeliveryPipelineIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig">DataGoogleClouddeployDeliveryPipelineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleClouddeployDeliveryPipelineIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleClouddeployDeliveryPipelineIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleClouddeployDeliveryPipelineIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleClouddeployDeliveryPipelineIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleClouddeployDeliveryPipelineIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleClouddeployDeliveryPipelineIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleClouddeployDeliveryPipelineIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleClouddeployDeliveryPipelineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleClouddeployDeliveryPipelineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleClouddeployDeliveryPipelineIamPolicyConfig <a name="DataGoogleClouddeployDeliveryPipelineIamPolicyConfig" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleClouddeployDeliveryPipelineIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#name DataGoogleClouddeployDeliveryPipelineIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#id DataGoogleClouddeployDeliveryPipelineIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#location DataGoogleClouddeployDeliveryPipelineIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#project DataGoogleClouddeployDeliveryPipelineIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#name DataGoogleClouddeployDeliveryPipelineIamPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#id DataGoogleClouddeployDeliveryPipelineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#location DataGoogleClouddeployDeliveryPipelineIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#project DataGoogleClouddeployDeliveryPipelineIamPolicy#project}.

---



