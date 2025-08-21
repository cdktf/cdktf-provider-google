# `dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy` Submodule <a name="`dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy <a name="DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy google_beyondcorp_security_gateway_application_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy(Construct Scope, string Id, DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig">DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig">DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayIdInput"></a>

```csharp
public string SecurityGatewayIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig <a name="DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    string SecurityGatewayId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#application_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#project DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#application_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#application_id}.

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#security_gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#id DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy.DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/beyondcorp_security_gateway_application_iam_policy#project DataGoogleBeyondcorpSecurityGatewayApplicationIamPolicy#project}.

---



