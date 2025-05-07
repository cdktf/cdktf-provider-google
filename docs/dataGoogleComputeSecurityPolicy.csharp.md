# `dataGoogleComputeSecurityPolicy` Submodule <a name="`dataGoogleComputeSecurityPolicy` Submodule" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeSecurityPolicy <a name="DataGoogleComputeSecurityPolicy" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/compute_security_policy google_compute_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicy(Construct Scope, string Id, DataGoogleComputeSecurityPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig">DataGoogleComputeSecurityPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig">DataGoogleComputeSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetSelfLink">ResetSelfLink</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSelfLink` <a name="ResetSelfLink" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetSelfLink"></a>

```csharp
private void ResetSelfLink()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeSecurityPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeSecurityPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeSecurityPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeSecurityPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleComputeSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeSecurityPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/compute_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.adaptiveProtectionConfig">AdaptiveProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.recaptchaOptionsConfig">RecaptchaOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList">DataGoogleComputeSecurityPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLinkInput">SelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdaptiveProtectionConfig`<sup>Required</sup> <a name="AdaptiveProtectionConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.adaptiveProtectionConfig"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList AdaptiveProtectionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList</a>

---

##### `AdvancedOptionsConfig`<sup>Required</sup> <a name="AdvancedOptionsConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.advancedOptionsConfig"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList AdvancedOptionsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `RecaptchaOptionsConfig`<sup>Required</sup> <a name="RecaptchaOptionsConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.recaptchaOptionsConfig"></a>

```csharp
public DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList RecaptchaOptionsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.rule"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList">DataGoogleComputeSecurityPolicyRuleList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SelfLinkInput`<sup>Optional</sup> <a name="SelfLinkInput" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLinkInput"></a>

```csharp
public string SelfLinkInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig {

};
```


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {

};
```


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs {

};
```


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs {

};
```


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfig <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdvancedOptionsConfig {

};
```


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {

};
```


### DataGoogleComputeSecurityPolicyConfig <a name="DataGoogleComputeSecurityPolicyConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    string Project = null,
    string SelfLink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/compute_security_policy#id DataGoogleComputeSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of the security policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.project">Project</a></code> | <code>string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.selfLink">SelfLink</a></code> | <code>string</code> | The URI of the created resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/compute_security_policy#id DataGoogleComputeSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/compute_security_policy#name DataGoogleComputeSecurityPolicy#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/compute_security_policy#project DataGoogleComputeSecurityPolicy#project}

---

##### `SelfLink`<sup>Optional</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.selfLink"></a>

```csharp
public string SelfLink { get; set; }
```

- *Type:* string

The URI of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/compute_security_policy#self_link DataGoogleComputeSecurityPolicy#self_link}

---

### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig {

};
```


### DataGoogleComputeSecurityPolicyRule <a name="DataGoogleComputeSecurityPolicyRule" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRule {

};
```


### DataGoogleComputeSecurityPolicyRuleHeaderAction <a name="DataGoogleComputeSecurityPolicyRuleHeaderAction" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleHeaderAction {

};
```


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds {

};
```


### DataGoogleComputeSecurityPolicyRuleMatch <a name="DataGoogleComputeSecurityPolicyRuleMatch" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatch {

};
```


### DataGoogleComputeSecurityPolicyRuleMatchConfig <a name="DataGoogleComputeSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchConfig {

};
```


### DataGoogleComputeSecurityPolicyRuleMatchExpr <a name="DataGoogleComputeSecurityPolicyRuleMatchExpr" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExpr {

};
```


### DataGoogleComputeSecurityPolicyRuleMatchExprOptions <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExprOptions {

};
```


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions {

};
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig {

};
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion {

};
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {

};
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {

};
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {

};
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {

};
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptions <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptions {

};
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold {

};
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs {

};
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions {

};
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold {

};
```


### DataGoogleComputeSecurityPolicyRuleRedirectOptions <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRedirectOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable">Enable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility">RuleVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigs">ThresholdConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable"></a>

```csharp
public IResolvable Enable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RuleVisibility`<sup>Required</sup> <a name="RuleVisibility" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility"></a>

```csharp
public string RuleVisibility { get; }
```

- *Type:* string

---

##### `ThresholdConfigs`<sup>Required</sup> <a name="ThresholdConfigs" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigs"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList ThresholdConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThreshold">AutoDeployConfidenceThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSec">AutoDeployExpirationSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThreshold">AutoDeployImpactedBaselineThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThreshold">AutoDeployLoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQps">DetectionAbsoluteQps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThreshold">DetectionLoadThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQps">DetectionRelativeToBaselineQps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigs">TrafficGranularityConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoDeployConfidenceThreshold`<sup>Required</sup> <a name="AutoDeployConfidenceThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThreshold"></a>

```csharp
public double AutoDeployConfidenceThreshold { get; }
```

- *Type:* double

---

##### `AutoDeployExpirationSec`<sup>Required</sup> <a name="AutoDeployExpirationSec" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSec"></a>

```csharp
public double AutoDeployExpirationSec { get; }
```

- *Type:* double

---

##### `AutoDeployImpactedBaselineThreshold`<sup>Required</sup> <a name="AutoDeployImpactedBaselineThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThreshold"></a>

```csharp
public double AutoDeployImpactedBaselineThreshold { get; }
```

- *Type:* double

---

##### `AutoDeployLoadThreshold`<sup>Required</sup> <a name="AutoDeployLoadThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThreshold"></a>

```csharp
public double AutoDeployLoadThreshold { get; }
```

- *Type:* double

---

##### `DetectionAbsoluteQps`<sup>Required</sup> <a name="DetectionAbsoluteQps" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQps"></a>

```csharp
public double DetectionAbsoluteQps { get; }
```

- *Type:* double

---

##### `DetectionLoadThreshold`<sup>Required</sup> <a name="DetectionLoadThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThreshold"></a>

```csharp
public double DetectionLoadThreshold { get; }
```

- *Type:* double

---

##### `DetectionRelativeToBaselineQps`<sup>Required</sup> <a name="DetectionRelativeToBaselineQps" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQps"></a>

```csharp
public double DetectionRelativeToBaselineQps { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TrafficGranularityConfigs`<sup>Required</sup> <a name="TrafficGranularityConfigs" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigs"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList TrafficGranularityConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValue">EnableEachUniqueValue</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableEachUniqueValue`<sup>Required</sup> <a name="EnableEachUniqueValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValue"></a>

```csharp
public IResolvable EnableEachUniqueValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig">Layer7DdosDefenseConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Layer7DdosDefenseConfig`<sup>Required</sup> <a name="Layer7DdosDefenseConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList Layer7DdosDefenseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig</a>

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">ContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```csharp
public string[] ContentTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">JsonParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonCustomConfig`<sup>Required</sup> <a name="JsonCustomConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList JsonCustomConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a>

---

##### `JsonParsing`<sup>Required</sup> <a name="JsonParsing" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```csharp
public string JsonParsing { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `UserIpRequestHeaders`<sup>Required</sup> <a name="UserIpRequestHeaders" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```csharp
public string[] UserIpRequestHeaders { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyAdvancedOptionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfig</a>

---


### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey">RedirectSiteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectSiteKey`<sup>Required</sup> <a name="RedirectSiteKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey"></a>

```csharp
public string RedirectSiteKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig</a>

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionList <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleHeaderActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction">DataGoogleComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestHeadersToAdds`<sup>Required</sup> <a name="RequestHeadersToAdds" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList RequestHeadersToAdds { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleHeaderAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction">DataGoogleComputeSecurityPolicyRuleHeaderAction</a>

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>

---


### DataGoogleComputeSecurityPolicyRuleList <a name="DataGoogleComputeSecurityPolicyRuleList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchConfigList <a name="DataGoogleComputeSecurityPolicyRuleMatchConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig">DataGoogleComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig">DataGoogleComputeSecurityPolicyRuleMatchConfig</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExprList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions">RecaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecaptchaOptions`<sup>Required</sup> <a name="RecaptchaOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList RecaptchaOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchExprOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys">ActionTokenSiteKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys">SessionTokenSiteKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionTokenSiteKeys`<sup>Required</sup> <a name="ActionTokenSiteKeys" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys"></a>

```csharp
public string[] ActionTokenSiteKeys { get; }
```

- *Type:* string[]

---

##### `SessionTokenSiteKeys`<sup>Required</sup> <a name="SessionTokenSiteKeys" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys"></a>

```csharp
public string[] SessionTokenSiteKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr">DataGoogleComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchExpr InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr">DataGoogleComputeSecurityPolicyRuleMatchExpr</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchList <a name="DataGoogleComputeSecurityPolicyRuleMatchList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList">DataGoogleComputeSecurityPolicyRuleMatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList">DataGoogleComputeSecurityPolicyRuleMatchExprList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions">ExprOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch">DataGoogleComputeSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.config"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchConfigList Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList">DataGoogleComputeSecurityPolicyRuleMatchConfigList</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchExprList Expr { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList">DataGoogleComputeSecurityPolicyRuleMatchExprList</a>

---

##### `ExprOptions`<sup>Required</sup> <a name="ExprOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList ExprOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList</a>

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```csharp
public string VersionedExpr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch">DataGoogleComputeSecurityPolicyRuleMatch</a>

---


### DataGoogleComputeSecurityPolicyRuleOutputReference <a name="DataGoogleComputeSecurityPolicyRuleOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList">DataGoogleComputeSecurityPolicyRuleHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList">DataGoogleComputeSecurityPolicyRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preview">Preview</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRedirectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule">DataGoogleComputeSecurityPolicyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.headerAction"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleHeaderActionList HeaderAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList">DataGoogleComputeSecurityPolicyRuleHeaderActionList</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.match"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleMatchList Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList">DataGoogleComputeSecurityPolicyRuleMatchList</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfig"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList PreconfiguredWafConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList</a>

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preview"></a>

```csharp
public IResolvable Preview { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList RateLimitOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList</a>

---

##### `RedirectOptions`<sup>Required</sup> <a name="RedirectOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.redirectOptions"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRedirectOptionsList RedirectOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRedirectOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule">DataGoogleComputeSecurityPolicyRule</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList RequestCookie { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList RequestHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList RequestQueryParam { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList RequestUri { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```csharp
public string[] TargetRuleIds { get; }
```

- *Type:* string[]

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```csharp
public string TargetRuleSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList Exclusion { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```csharp
public double IntervalSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; }
```

- *Type:* string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```csharp
public string EnforceOnKeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction">ConformAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction">ExceedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions">ExceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec"></a>

```csharp
public double BanDurationSec { get; }
```

- *Type:* double

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList BanThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList</a>

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction"></a>

```csharp
public string ConformAction { get; }
```

- *Type:* string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```csharp
public string EnforceOnKey { get; }
```

- *Type:* string

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList EnforceOnKeyConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; }
```

- *Type:* string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction"></a>

```csharp
public string ExceedAction { get; }
```

- *Type:* string

---

##### `ExceedRedirectOptions`<sup>Required</sup> <a name="ExceedRedirectOptions" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList ExceedRedirectOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList RateLimitThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```csharp
public double IntervalSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---


### DataGoogleComputeSecurityPolicyRuleRedirectOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptionsList" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRedirectOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get"></a>

```csharp
private DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions">DataGoogleComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeSecurityPolicyRuleRedirectOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions">DataGoogleComputeSecurityPolicyRuleRedirectOptions</a>

---



