# `dataGoogleBeyondcorpSecurityGatewayIamPolicy` Submodule <a name="`dataGoogleBeyondcorpSecurityGatewayIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpSecurityGatewayIamPolicy <a name="DataGoogleBeyondcorpSecurityGatewayIamPolicy" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy google_beyondcorp_security_gateway_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpSecurityGatewayIamPolicy(Construct Scope, string Id, DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig">DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig">DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBeyondcorpSecurityGatewayIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpSecurityGatewayIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpSecurityGatewayIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpSecurityGatewayIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpSecurityGatewayIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleBeyondcorpSecurityGatewayIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBeyondcorpSecurityGatewayIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBeyondcorpSecurityGatewayIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpSecurityGatewayIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.securityGatewayIdInput"></a>

```csharp
public string SecurityGatewayIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig <a name="DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecurityGatewayId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayIamPolicy#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#id DataGoogleBeyondcorpSecurityGatewayIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#location DataGoogleBeyondcorpSecurityGatewayIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#project DataGoogleBeyondcorpSecurityGatewayIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayIamPolicy#security_gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#id DataGoogleBeyondcorpSecurityGatewayIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#location DataGoogleBeyondcorpSecurityGatewayIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/beyondcorp_security_gateway_iam_policy#project DataGoogleBeyondcorpSecurityGatewayIamPolicy#project}.

---



