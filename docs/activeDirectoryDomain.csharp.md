# `google_active_directory_domain`

Refer to the Terraform Registory for docs: [`google_active_directory_domain`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain).

# `activeDirectoryDomain` Submodule <a name="`activeDirectoryDomain` Submodule" id="@cdktf/provider-google.activeDirectoryDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomain <a name="ActiveDirectoryDomain" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain google_active_directory_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ActiveDirectoryDomain(Construct Scope, string Id, ActiveDirectoryDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig">ActiveDirectoryDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig">ActiveDirectoryDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAdmin">ResetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAuthorizedNetworks">ResetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(ActiveDirectoryDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

---

##### `ResetAdmin` <a name="ResetAdmin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAdmin"></a>

```csharp
private void ResetAdmin()
```

##### `ResetAuthorizedNetworks` <a name="ResetAuthorizedNetworks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAuthorizedNetworks"></a>

```csharp
private void ResetAuthorizedNetworks()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ActiveDirectoryDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ActiveDirectoryDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ActiveDirectoryDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference">ActiveDirectoryDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.adminInput">AdminInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworksInput">AuthorizedNetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.admin">Admin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference">ActiveDirectoryDomainTimeoutsOutputReference</a>

---

##### `AdminInput`<sup>Optional</sup> <a name="AdminInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.adminInput"></a>

```csharp
public string AdminInput { get; }
```

- *Type:* string

---

##### `AuthorizedNetworksInput`<sup>Optional</sup> <a name="AuthorizedNetworksInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworksInput"></a>

```csharp
public string[] AuthorizedNetworksInput { get; }
```

- *Type:* string[]

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRangeInput"></a>

```csharp
public string ReservedIpRangeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.admin"></a>

```csharp
public string Admin { get; }
```

- *Type:* string

---

##### `AuthorizedNetworks`<sup>Required</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworks"></a>

```csharp
public string[] AuthorizedNetworks { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainConfig <a name="ActiveDirectoryDomainConfig" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ActiveDirectoryDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    string[] Locations,
    string ReservedIpRange,
    string Admin = null,
    string[] AuthorizedNetworks = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    ActiveDirectoryDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.domainName">DomainName</a></code> | <code>string</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.locations">Locations</a></code> | <code>string[]</code> | Locations where domain needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | The CIDR range of internal addresses that are reserved for this domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.admin">Admin</a></code> | <code>string</code> | The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code>string[]</code> | The full names of the Google Compute Engine networks the domain instance is connected to. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#id ActiveDirectoryDomain#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#project ActiveDirectoryDomain#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#domain_name ActiveDirectoryDomain#domain_name}

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

Locations where domain needs to be provisioned.

[regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#locations ActiveDirectoryDomain#locations}

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; set; }
```

- *Type:* string

The CIDR range of internal addresses that are reserved for this domain.

Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#reserved_ip_range ActiveDirectoryDomain#reserved_ip_range}

---

##### `Admin`<sup>Optional</sup> <a name="Admin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.admin"></a>

```csharp
public string Admin { get; set; }
```

- *Type:* string

The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#admin ActiveDirectoryDomain#admin}

---

##### `AuthorizedNetworks`<sup>Optional</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.authorizedNetworks"></a>

```csharp
public string[] AuthorizedNetworks { get; set; }
```

- *Type:* string[]

The full names of the Google Compute Engine networks the domain instance is connected to.

The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#authorized_networks ActiveDirectoryDomain#authorized_networks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#id ActiveDirectoryDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels that can contain user-provided metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#labels ActiveDirectoryDomain#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#project ActiveDirectoryDomain#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#timeouts ActiveDirectoryDomain#timeouts}

---

### ActiveDirectoryDomainTimeouts <a name="ActiveDirectoryDomainTimeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ActiveDirectoryDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#create ActiveDirectoryDomain#create}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#delete ActiveDirectoryDomain#delete}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#update ActiveDirectoryDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#create ActiveDirectoryDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#delete ActiveDirectoryDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/active_directory_domain#update ActiveDirectoryDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainTimeoutsOutputReference <a name="ActiveDirectoryDomainTimeoutsOutputReference" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ActiveDirectoryDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



