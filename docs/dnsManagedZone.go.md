# `dnsManagedZone` Submodule <a name="`dnsManagedZone` Submodule" id="@cdktf/provider-google.dnsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsManagedZone <a name="DnsManagedZone" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone google_dns_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZone(scope Construct, id *string, config DnsManagedZoneConfig) DnsManagedZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig">DnsManagedZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig">DnsManagedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig">PutCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig">PutDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig">PutForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig">PutPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig">PutPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetCloudLoggingConfig">ResetCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDnssecConfig">ResetDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForwardingConfig">ResetForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPeeringConfig">ResetPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPrivateVisibilityConfig">ResetPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCloudLoggingConfig` <a name="PutCloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig"></a>

```go
func PutCloudLoggingConfig(value DnsManagedZoneCloudLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---

##### `PutDnssecConfig` <a name="PutDnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig"></a>

```go
func PutDnssecConfig(value DnsManagedZoneDnssecConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---

##### `PutForwardingConfig` <a name="PutForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig"></a>

```go
func PutForwardingConfig(value DnsManagedZoneForwardingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---

##### `PutPeeringConfig` <a name="PutPeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig"></a>

```go
func PutPeeringConfig(value DnsManagedZonePeeringConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---

##### `PutPrivateVisibilityConfig` <a name="PutPrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig"></a>

```go
func PutPrivateVisibilityConfig(value DnsManagedZonePrivateVisibilityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts"></a>

```go
func PutTimeouts(value DnsManagedZoneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

---

##### `ResetCloudLoggingConfig` <a name="ResetCloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetCloudLoggingConfig"></a>

```go
func ResetCloudLoggingConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDnssecConfig` <a name="ResetDnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDnssecConfig"></a>

```go
func ResetDnssecConfig()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetForwardingConfig` <a name="ResetForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForwardingConfig"></a>

```go
func ResetForwardingConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPeeringConfig` <a name="ResetPeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPeeringConfig"></a>

```go
func ResetPeeringConfig()
```

##### `ResetPrivateVisibilityConfig` <a name="ResetPrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPrivateVisibilityConfig"></a>

```go
func ResetPrivateVisibilityConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetVisibility"></a>

```go
func ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.DnsManagedZone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.DnsManagedZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.DnsManagedZone_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfig">CloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference">DnsManagedZoneCloudLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference">DnsManagedZoneDnssecConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfig">ForwardingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference">DnsManagedZoneForwardingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.managedZoneId">ManagedZoneId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfig">PeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference">DnsManagedZonePeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfig">PrivateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference">DnsManagedZonePrivateVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference">DnsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfigInput">CloudLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsNameInput">DnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfigInput">DnssecConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfigInput">ForwardingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfigInput">PeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfigInput">PrivateVisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudLoggingConfig`<sup>Required</sup> <a name="CloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfig"></a>

```go
func CloudLoggingConfig() DnsManagedZoneCloudLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference">DnsManagedZoneCloudLoggingConfigOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DnssecConfig`<sup>Required</sup> <a name="DnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfig"></a>

```go
func DnssecConfig() DnsManagedZoneDnssecConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference">DnsManagedZoneDnssecConfigOutputReference</a>

---

##### `ForwardingConfig`<sup>Required</sup> <a name="ForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfig"></a>

```go
func ForwardingConfig() DnsManagedZoneForwardingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference">DnsManagedZoneForwardingConfigOutputReference</a>

---

##### `ManagedZoneId`<sup>Required</sup> <a name="ManagedZoneId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.managedZoneId"></a>

```go
func ManagedZoneId() *f64
```

- *Type:* *f64

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameServers"></a>

```go
func NameServers() *[]*string
```

- *Type:* *[]*string

---

##### `PeeringConfig`<sup>Required</sup> <a name="PeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfig"></a>

```go
func PeeringConfig() DnsManagedZonePeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference">DnsManagedZonePeeringConfigOutputReference</a>

---

##### `PrivateVisibilityConfig`<sup>Required</sup> <a name="PrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfig"></a>

```go
func PrivateVisibilityConfig() DnsManagedZonePrivateVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference">DnsManagedZonePrivateVisibilityConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeouts"></a>

```go
func Timeouts() DnsManagedZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference">DnsManagedZoneTimeoutsOutputReference</a>

---

##### `CloudLoggingConfigInput`<sup>Optional</sup> <a name="CloudLoggingConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfigInput"></a>

```go
func CloudLoggingConfigInput() DnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsNameInput"></a>

```go
func DnsNameInput() *string
```

- *Type:* *string

---

##### `DnssecConfigInput`<sup>Optional</sup> <a name="DnssecConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfigInput"></a>

```go
func DnssecConfigInput() DnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardingConfigInput`<sup>Optional</sup> <a name="ForwardingConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfigInput"></a>

```go
func ForwardingConfigInput() DnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeeringConfigInput`<sup>Optional</sup> <a name="PeeringConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfigInput"></a>

```go
func PeeringConfigInput() DnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---

##### `PrivateVisibilityConfigInput`<sup>Optional</sup> <a name="PrivateVisibilityConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfigInput"></a>

```go
func PrivateVisibilityConfigInput() DnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsManagedZoneCloudLoggingConfig <a name="DnsManagedZoneCloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZoneCloudLoggingConfig {
	EnableLogging: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | If set, enable query logging for this ManagedZone. False by default, making logging opt-in. |

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#enable_logging DnsManagedZone#enable_logging}

---

### DnsManagedZoneConfig <a name="DnsManagedZoneConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZoneConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsName: *string,
	Name: *string,
	CloudLoggingConfig: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig,
	Description: *string,
	DnssecConfig: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZone.DnsManagedZoneDnssecConfig,
	ForceDestroy: interface{},
	ForwardingConfig: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZone.DnsManagedZoneForwardingConfig,
	Id: *string,
	Labels: *map[string]*string,
	PeeringConfig: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZone.DnsManagedZonePeeringConfig,
	PrivateVisibilityConfig: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZone.DnsManagedZoneTimeouts,
	Visibility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnsName">DnsName</a></code> | <code>*string</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.name">Name</a></code> | <code>*string</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.cloudLoggingConfig">CloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.description">Description</a></code> | <code>*string</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forwardingConfig">ForwardingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#id DnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.peeringConfig">PeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.privateVisibilityConfig">PrivateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#project DnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.visibility">Visibility</a></code> | <code>*string</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnsName"></a>

```go
DnsName *string
```

- *Type:* *string

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#dns_name DnsManagedZone#dns_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#name DnsManagedZone#name}

---

##### `CloudLoggingConfig`<sup>Optional</sup> <a name="CloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.cloudLoggingConfig"></a>

```go
CloudLoggingConfig DnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#cloud_logging_config DnsManagedZone#cloud_logging_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#description DnsManagedZone#description}

---

##### `DnssecConfig`<sup>Optional</sup> <a name="DnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnssecConfig"></a>

```go
DnssecConfig DnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#dnssec_config DnsManagedZone#dnssec_config}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#force_destroy DnsManagedZone#force_destroy}

---

##### `ForwardingConfig`<sup>Optional</sup> <a name="ForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forwardingConfig"></a>

```go
ForwardingConfig DnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#forwarding_config DnsManagedZone#forwarding_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#id DnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to this ManagedZone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#labels DnsManagedZone#labels}

---

##### `PeeringConfig`<sup>Optional</sup> <a name="PeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.peeringConfig"></a>

```go
PeeringConfig DnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#peering_config DnsManagedZone#peering_config}

---

##### `PrivateVisibilityConfig`<sup>Optional</sup> <a name="PrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.privateVisibilityConfig"></a>

```go
PrivateVisibilityConfig DnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#private_visibility_config DnsManagedZone#private_visibility_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#project DnsManagedZone#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.timeouts"></a>

```go
Timeouts DnsManagedZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#timeouts DnsManagedZone#timeouts}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#visibility DnsManagedZone#visibility}

---

### DnsManagedZoneDnssecConfig <a name="DnsManagedZoneDnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZoneDnssecConfig {
	DefaultKeySpecs: interface{},
	Kind: *string,
	NonExistence: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.defaultKeySpecs">DefaultKeySpecs</a></code> | <code>interface{}</code> | default_key_specs block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.kind">Kind</a></code> | <code>*string</code> | Identifies what kind of resource this is. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.nonExistence">NonExistence</a></code> | <code>*string</code> | Specifies the mechanism used to provide authenticated denial-of-existence responses. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.state">State</a></code> | <code>*string</code> | Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]. |

---

##### `DefaultKeySpecs`<sup>Optional</sup> <a name="DefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.defaultKeySpecs"></a>

```go
DefaultKeySpecs interface{}
```

- *Type:* interface{}

default_key_specs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#default_key_specs DnsManagedZone#default_key_specs}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#kind DnsManagedZone#kind}

---

##### `NonExistence`<sup>Optional</sup> <a name="NonExistence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.nonExistence"></a>

```go
NonExistence *string
```

- *Type:* *string

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#non_existence DnsManagedZone#non_existence}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#state DnsManagedZone#state}

---

### DnsManagedZoneDnssecConfigDefaultKeySpecs <a name="DnsManagedZoneDnssecConfigDefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZoneDnssecConfigDefaultKeySpecs {
	Algorithm: *string,
	KeyLength: *f64,
	KeyType: *string,
	Kind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm">Algorithm</a></code> | <code>*string</code> | String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength">KeyLength</a></code> | <code>*f64</code> | Length of the keys in bits. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType">KeyType</a></code> | <code>*string</code> | Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind">Kind</a></code> | <code>*string</code> | Identifies what kind of resource this is. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#algorithm DnsManagedZone#algorithm}

---

##### `KeyLength`<sup>Optional</sup> <a name="KeyLength" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength"></a>

```go
KeyLength *f64
```

- *Type:* *f64

Length of the keys in bits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#key_length DnsManagedZone#key_length}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK).

Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#key_type DnsManagedZone#key_type}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#kind DnsManagedZone#kind}

---

### DnsManagedZoneForwardingConfig <a name="DnsManagedZoneForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZoneForwardingConfig {
	TargetNameServers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.property.targetNameServers">TargetNameServers</a></code> | <code>interface{}</code> | target_name_servers block. |

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.property.targetNameServers"></a>

```go
TargetNameServers interface{}
```

- *Type:* interface{}

target_name_servers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#target_name_servers DnsManagedZone#target_name_servers}

---

### DnsManagedZoneForwardingConfigTargetNameServers <a name="DnsManagedZoneForwardingConfigTargetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZoneForwardingConfigTargetNameServers {
	Ipv4Address: *string,
	ForwardingPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | IPv4 address of a target name server. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath">ForwardingPath</a></code> | <code>*string</code> | Forwarding path for this TargetNameServer. |

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

IPv4 address of a target name server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#ipv4_address DnsManagedZone#ipv4_address}

---

##### `ForwardingPath`<sup>Optional</sup> <a name="ForwardingPath" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath"></a>

```go
ForwardingPath *string
```

- *Type:* *string

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#forwarding_path DnsManagedZone#forwarding_path}

---

### DnsManagedZonePeeringConfig <a name="DnsManagedZonePeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZonePeeringConfig {
	TargetNetwork: github.com/cdktf/cdktf-provider-google-go/google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | target_network block. |

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.property.targetNetwork"></a>

```go
TargetNetwork DnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#target_network DnsManagedZone#target_network}

---

### DnsManagedZonePeeringConfigTargetNetwork <a name="DnsManagedZonePeeringConfigTargetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZonePeeringConfigTargetNetwork {
	NetworkUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.property.networkUrl"></a>

```go
NetworkUrl *string
```

- *Type:* *string

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#network_url DnsManagedZone#network_url}

---

### DnsManagedZonePrivateVisibilityConfig <a name="DnsManagedZonePrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZonePrivateVisibilityConfig {
	Networks: interface{},
	GkeClusters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.gkeClusters">GkeClusters</a></code> | <code>interface{}</code> | gke_clusters block. |

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#networks DnsManagedZone#networks}

---

##### `GkeClusters`<sup>Optional</sup> <a name="GkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.gkeClusters"></a>

```go
GkeClusters interface{}
```

- *Type:* interface{}

gke_clusters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#gke_clusters DnsManagedZone#gke_clusters}

---

### DnsManagedZonePrivateVisibilityConfigGkeClusters <a name="DnsManagedZonePrivateVisibilityConfigGkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZonePrivateVisibilityConfigGkeClusters {
	GkeClusterName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName">GkeClusterName</a></code> | <code>*string</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName"></a>

```go
GkeClusterName *string
```

- *Type:* *string

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like\
'projects/*/locations/*/clusters/*'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#gke_cluster_name DnsManagedZone#gke_cluster_name}

---

### DnsManagedZonePrivateVisibilityConfigNetworks <a name="DnsManagedZonePrivateVisibilityConfigNetworks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZonePrivateVisibilityConfigNetworks {
	NetworkUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl"></a>

```go
NetworkUrl *string
```

- *Type:* *string

The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#network_url DnsManagedZone#network_url}

---

### DnsManagedZoneTimeouts <a name="DnsManagedZoneTimeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

&dnsmanagedzone.DnsManagedZoneTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#create DnsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#delete DnsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#update DnsManagedZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#create DnsManagedZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#delete DnsManagedZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_managed_zone#update DnsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsManagedZoneCloudLoggingConfigOutputReference <a name="DnsManagedZoneCloudLoggingConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZoneCloudLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZoneCloudLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---


### DnsManagedZoneDnssecConfigDefaultKeySpecsList <a name="DnsManagedZoneDnssecConfigDefaultKeySpecsList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZoneDnssecConfigDefaultKeySpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsManagedZoneDnssecConfigDefaultKeySpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get"></a>

```go
func Get(index *f64) DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference <a name="DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength">ResetKeyLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind">ResetKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetKeyLength` <a name="ResetKeyLength" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength"></a>

```go
func ResetKeyLength()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind"></a>

```go
func ResetKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput">KeyLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength">KeyLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `KeyLengthInput`<sup>Optional</sup> <a name="KeyLengthInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput"></a>

```go
func KeyLengthInput() *f64
```

- *Type:* *f64

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `KeyLength`<sup>Required</sup> <a name="KeyLength" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength"></a>

```go
func KeyLength() *f64
```

- *Type:* *f64

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsManagedZoneDnssecConfigOutputReference <a name="DnsManagedZoneDnssecConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZoneDnssecConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZoneDnssecConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs">PutDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs">ResetDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetNonExistence">ResetNonExistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultKeySpecs` <a name="PutDefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs"></a>

```go
func PutDefaultKeySpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultKeySpecs` <a name="ResetDefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs"></a>

```go
func ResetDefaultKeySpecs()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetKind"></a>

```go
func ResetKind()
```

##### `ResetNonExistence` <a name="ResetNonExistence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetNonExistence"></a>

```go
func ResetNonExistence()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs">DefaultKeySpecs</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList">DnsManagedZoneDnssecConfigDefaultKeySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput">DefaultKeySpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput">NonExistenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistence">NonExistence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultKeySpecs`<sup>Required</sup> <a name="DefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs"></a>

```go
func DefaultKeySpecs() DnsManagedZoneDnssecConfigDefaultKeySpecsList
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList">DnsManagedZoneDnssecConfigDefaultKeySpecsList</a>

---

##### `DefaultKeySpecsInput`<sup>Optional</sup> <a name="DefaultKeySpecsInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput"></a>

```go
func DefaultKeySpecsInput() interface{}
```

- *Type:* interface{}

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NonExistenceInput`<sup>Optional</sup> <a name="NonExistenceInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput"></a>

```go
func NonExistenceInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `NonExistence`<sup>Required</sup> <a name="NonExistence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistence"></a>

```go
func NonExistence() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---


### DnsManagedZoneForwardingConfigOutputReference <a name="DnsManagedZoneForwardingConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZoneForwardingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZoneForwardingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers">PutTargetNameServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNameServers` <a name="PutTargetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers"></a>

```go
func PutTargetNameServers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServers">TargetNameServers</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList">DnsManagedZoneForwardingConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput">TargetNameServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServers"></a>

```go
func TargetNameServers() DnsManagedZoneForwardingConfigTargetNameServersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList">DnsManagedZoneForwardingConfigTargetNameServersList</a>

---

##### `TargetNameServersInput`<sup>Optional</sup> <a name="TargetNameServersInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput"></a>

```go
func TargetNameServersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---


### DnsManagedZoneForwardingConfigTargetNameServersList <a name="DnsManagedZoneForwardingConfigTargetNameServersList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZoneForwardingConfigTargetNameServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsManagedZoneForwardingConfigTargetNameServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get"></a>

```go
func Get(index *f64) DnsManagedZoneForwardingConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsManagedZoneForwardingConfigTargetNameServersOutputReference <a name="DnsManagedZoneForwardingConfigTargetNameServersOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZoneForwardingConfigTargetNameServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsManagedZoneForwardingConfigTargetNameServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath">ResetForwardingPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardingPath` <a name="ResetForwardingPath" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```go
func ResetForwardingPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput">ForwardingPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath">ForwardingPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardingPathInput`<sup>Optional</sup> <a name="ForwardingPathInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```go
func ForwardingPathInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `ForwardingPath`<sup>Required</sup> <a name="ForwardingPath" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```go
func ForwardingPath() *string
```

- *Type:* *string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsManagedZonePeeringConfigOutputReference <a name="DnsManagedZonePeeringConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZonePeeringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZonePeeringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork">PutTargetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNetwork` <a name="PutTargetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork"></a>

```go
func PutTargetNetwork(value DnsManagedZonePeeringConfigTargetNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference">DnsManagedZonePeeringConfigTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() DnsManagedZonePeeringConfigTargetNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference">DnsManagedZonePeeringConfigTargetNetworkOutputReference</a>

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() DnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---


### DnsManagedZonePeeringConfigTargetNetworkOutputReference <a name="DnsManagedZonePeeringConfigTargetNetworkOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZonePeeringConfigTargetNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZonePeeringConfigTargetNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput"></a>

```go
func NetworkUrlInput() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---


### DnsManagedZonePrivateVisibilityConfigGkeClustersList <a name="DnsManagedZonePrivateVisibilityConfigGkeClustersList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZonePrivateVisibilityConfigGkeClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsManagedZonePrivateVisibilityConfigGkeClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get"></a>

```go
func Get(index *f64) DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference <a name="DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput">GkeClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName">GkeClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GkeClusterNameInput`<sup>Optional</sup> <a name="GkeClusterNameInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```go
func GkeClusterNameInput() *string
```

- *Type:* *string

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName"></a>

```go
func GkeClusterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsManagedZonePrivateVisibilityConfigNetworksList <a name="DnsManagedZonePrivateVisibilityConfigNetworksList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZonePrivateVisibilityConfigNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsManagedZonePrivateVisibilityConfigNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get"></a>

```go
func Get(index *f64) DnsManagedZonePrivateVisibilityConfigNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsManagedZonePrivateVisibilityConfigNetworksOutputReference <a name="DnsManagedZonePrivateVisibilityConfigNetworksOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZonePrivateVisibilityConfigNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsManagedZonePrivateVisibilityConfigNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput"></a>

```go
func NetworkUrlInput() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsManagedZonePrivateVisibilityConfigOutputReference <a name="DnsManagedZonePrivateVisibilityConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZonePrivateVisibilityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZonePrivateVisibilityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters">PutGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters">ResetGkeClusters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeClusters` <a name="PutGkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters"></a>

```go
func PutGkeClusters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGkeClusters` <a name="ResetGkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters"></a>

```go
func ResetGkeClusters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters">GkeClusters</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList">DnsManagedZonePrivateVisibilityConfigGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList">DnsManagedZonePrivateVisibilityConfigNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput">GkeClustersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GkeClusters`<sup>Required</sup> <a name="GkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters"></a>

```go
func GkeClusters() DnsManagedZonePrivateVisibilityConfigGkeClustersList
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList">DnsManagedZonePrivateVisibilityConfigGkeClustersList</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networks"></a>

```go
func Networks() DnsManagedZonePrivateVisibilityConfigNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList">DnsManagedZonePrivateVisibilityConfigNetworksList</a>

---

##### `GkeClustersInput`<sup>Optional</sup> <a name="GkeClustersInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput"></a>

```go
func GkeClustersInput() interface{}
```

- *Type:* interface{}

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---


### DnsManagedZoneTimeoutsOutputReference <a name="DnsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dnsmanagedzone"

dnsmanagedzone.NewDnsManagedZoneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsManagedZoneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



