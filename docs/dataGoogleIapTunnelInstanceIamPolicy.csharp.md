# `dataGoogleIapTunnelInstanceIamPolicy` Submodule <a name="`dataGoogleIapTunnelInstanceIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapTunnelInstanceIamPolicy <a name="DataGoogleIapTunnelInstanceIamPolicy" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy google_iap_tunnel_instance_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleIapTunnelInstanceIamPolicy(Construct Scope, string Id, DataGoogleIapTunnelInstanceIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig">DataGoogleIapTunnelInstanceIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig">DataGoogleIapTunnelInstanceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleIapTunnelInstanceIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleIapTunnelInstanceIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleIapTunnelInstanceIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleIapTunnelInstanceIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleIapTunnelInstanceIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleIapTunnelInstanceIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIapTunnelInstanceIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIapTunnelInstanceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIapTunnelInstanceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapTunnelInstanceIamPolicyConfig <a name="DataGoogleIapTunnelInstanceIamPolicyConfig" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleIapTunnelInstanceIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Instance,
    string Id = null,
    string Project = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.instance">Instance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#instance DataGoogleIapTunnelInstanceIamPolicy#instance}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#id DataGoogleIapTunnelInstanceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#project DataGoogleIapTunnelInstanceIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#zone DataGoogleIapTunnelInstanceIamPolicy#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#instance DataGoogleIapTunnelInstanceIamPolicy#instance}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#id DataGoogleIapTunnelInstanceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#project DataGoogleIapTunnelInstanceIamPolicy#project}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleIapTunnelInstanceIamPolicy.DataGoogleIapTunnelInstanceIamPolicyConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/iap_tunnel_instance_iam_policy#zone DataGoogleIapTunnelInstanceIamPolicy#zone}.

---



