# `dataGoogleVmwareengineSubnet` Submodule <a name="`dataGoogleVmwareengineSubnet` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineSubnet <a name="DataGoogleVmwareengineSubnet" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_subnet google_vmwareengine_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleVmwareengineSubnet(Construct Scope, string Id, DataGoogleVmwareengineSubnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig">DataGoogleVmwareengineSubnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig">DataGoogleVmwareengineSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleVmwareengineSubnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleVmwareengineSubnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleVmwareengineSubnet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleVmwareengineSubnet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleVmwareengineSubnet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineSubnet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_subnet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.dhcpAddressRanges">DhcpAddressRanges</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList">DataGoogleVmwareengineSubnetDhcpAddressRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.gatewayIp">GatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.standardConfig">StandardConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.vlanId">VlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DhcpAddressRanges`<sup>Required</sup> <a name="DhcpAddressRanges" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.dhcpAddressRanges"></a>

```csharp
public DataGoogleVmwareengineSubnetDhcpAddressRangesList DhcpAddressRanges { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList">DataGoogleVmwareengineSubnetDhcpAddressRangesList</a>

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.gatewayIp"></a>

```csharp
public string GatewayIp { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `StandardConfig`<sup>Required</sup> <a name="StandardConfig" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.standardConfig"></a>

```csharp
public IResolvable StandardConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.vlanId"></a>

```csharp
public double VlanId { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineSubnetConfig <a name="DataGoogleVmwareengineSubnetConfig" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleVmwareengineSubnetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Parent,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.name">Name</a></code> | <code>string</code> | The ID of the subnet. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.parent">Parent</a></code> | <code>string</code> | The resource name of the private cloud to create a new subnet in. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_subnet#id DataGoogleVmwareengineSubnet#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the subnet.

For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_subnet#name DataGoogleVmwareengineSubnet#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The resource name of the private cloud to create a new subnet in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_subnet#parent DataGoogleVmwareengineSubnet#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_subnet#id DataGoogleVmwareengineSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleVmwareengineSubnetDhcpAddressRanges <a name="DataGoogleVmwareengineSubnetDhcpAddressRanges" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleVmwareengineSubnetDhcpAddressRanges {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineSubnetDhcpAddressRangesList <a name="DataGoogleVmwareengineSubnetDhcpAddressRangesList" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleVmwareengineSubnetDhcpAddressRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.get"></a>

```csharp
private DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference <a name="DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.firstAddress">FirstAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.lastAddress">LastAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges">DataGoogleVmwareengineSubnetDhcpAddressRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirstAddress`<sup>Required</sup> <a name="FirstAddress" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.firstAddress"></a>

```csharp
public string FirstAddress { get; }
```

- *Type:* string

---

##### `LastAddress`<sup>Required</sup> <a name="LastAddress" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.lastAddress"></a>

```csharp
public string LastAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineSubnetDhcpAddressRanges InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges">DataGoogleVmwareengineSubnetDhcpAddressRanges</a>

---



