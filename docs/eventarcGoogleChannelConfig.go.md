# `eventarcGoogleChannelConfig` Submodule <a name="`eventarcGoogleChannelConfig` Submodule" id="@cdktf/provider-google.eventarcGoogleChannelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcGoogleChannelConfig <a name="EventarcGoogleChannelConfig" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config google_eventarc_google_channel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcgooglechannelconfig"

eventarcgooglechannelconfig.NewEventarcGoogleChannelConfig(scope Construct, id *string, config EventarcGoogleChannelConfigConfig) EventarcGoogleChannelConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig">EventarcGoogleChannelConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig">EventarcGoogleChannelConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetCryptoKeyName">ResetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.putTimeouts"></a>

```go
func PutTimeouts(value EventarcGoogleChannelConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a>

---

##### `ResetCryptoKeyName` <a name="ResetCryptoKeyName" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetCryptoKeyName"></a>

```go
func ResetCryptoKeyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcgooglechannelconfig"

eventarcgooglechannelconfig.EventarcGoogleChannelConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcgooglechannelconfig"

eventarcgooglechannelconfig.EventarcGoogleChannelConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcgooglechannelconfig"

eventarcgooglechannelconfig.EventarcGoogleChannelConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference">EventarcGoogleChannelConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cryptoKeyNameInput">CryptoKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cryptoKeyName">CryptoKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.timeouts"></a>

```go
func Timeouts() EventarcGoogleChannelConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference">EventarcGoogleChannelConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CryptoKeyNameInput`<sup>Optional</sup> <a name="CryptoKeyNameInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cryptoKeyNameInput"></a>

```go
func CryptoKeyNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CryptoKeyName`<sup>Required</sup> <a name="CryptoKeyName" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cryptoKeyName"></a>

```go
func CryptoKeyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcGoogleChannelConfigConfig <a name="EventarcGoogleChannelConfigConfig" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcgooglechannelconfig"

&eventarcgooglechannelconfig.EventarcGoogleChannelConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	CryptoKeyName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.name">Name</a></code> | <code>*string</code> | Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.cryptoKeyName">CryptoKeyName</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#id EventarcGoogleChannelConfig#id}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#location EventarcGoogleChannelConfig#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#name EventarcGoogleChannelConfig#name}

---

##### `CryptoKeyName`<sup>Optional</sup> <a name="CryptoKeyName" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.cryptoKeyName"></a>

```go
CryptoKeyName *string
```

- *Type:* *string

Optional.

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#crypto_key_name EventarcGoogleChannelConfig#crypto_key_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#id EventarcGoogleChannelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#project EventarcGoogleChannelConfig#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.timeouts"></a>

```go
Timeouts EventarcGoogleChannelConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#timeouts EventarcGoogleChannelConfig#timeouts}

---

### EventarcGoogleChannelConfigTimeouts <a name="EventarcGoogleChannelConfigTimeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcgooglechannelconfig"

&eventarcgooglechannelconfig.EventarcGoogleChannelConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#create EventarcGoogleChannelConfig#create}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#delete EventarcGoogleChannelConfig#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#update EventarcGoogleChannelConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#create EventarcGoogleChannelConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#delete EventarcGoogleChannelConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_google_channel_config#update EventarcGoogleChannelConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcGoogleChannelConfigTimeoutsOutputReference <a name="EventarcGoogleChannelConfigTimeoutsOutputReference" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcgooglechannelconfig"

eventarcgooglechannelconfig.NewEventarcGoogleChannelConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcGoogleChannelConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



