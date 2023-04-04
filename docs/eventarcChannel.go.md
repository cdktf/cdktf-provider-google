# `eventarcChannel` Submodule <a name="`eventarcChannel` Submodule" id="@cdktf/provider-google.eventarcChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcChannel <a name="EventarcChannel" id="@cdktf/provider-google.eventarcChannel.EventarcChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel google_eventarc_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcchannel"

eventarcchannel.NewEventarcChannel(scope Construct, id *string, config EventarcChannelConfig) EventarcChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig">EventarcChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig">EventarcChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.resetCryptoKeyName">ResetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.resetThirdPartyProvider">ResetThirdPartyProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.putTimeouts"></a>

```go
func PutTimeouts(value EventarcChannelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts">EventarcChannelTimeouts</a>

---

##### `ResetCryptoKeyName` <a name="ResetCryptoKeyName" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.resetCryptoKeyName"></a>

```go
func ResetCryptoKeyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetThirdPartyProvider` <a name="ResetThirdPartyProvider" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.resetThirdPartyProvider"></a>

```go
func ResetThirdPartyProvider()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcchannel"

eventarcchannel.EventarcChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcchannel"

eventarcchannel.EventarcChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcchannel"

eventarcchannel.EventarcChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.activationToken">ActivationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference">EventarcChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.cryptoKeyNameInput">CryptoKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.thirdPartyProviderInput">ThirdPartyProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.cryptoKeyName">CryptoKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.thirdPartyProvider">ThirdPartyProvider</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActivationToken`<sup>Required</sup> <a name="ActivationToken" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.activationToken"></a>

```go
func ActivationToken() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.timeouts"></a>

```go
func Timeouts() EventarcChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference">EventarcChannelTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CryptoKeyNameInput`<sup>Optional</sup> <a name="CryptoKeyNameInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.cryptoKeyNameInput"></a>

```go
func CryptoKeyNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ThirdPartyProviderInput`<sup>Optional</sup> <a name="ThirdPartyProviderInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.thirdPartyProviderInput"></a>

```go
func ThirdPartyProviderInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CryptoKeyName`<sup>Required</sup> <a name="CryptoKeyName" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.cryptoKeyName"></a>

```go
func CryptoKeyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ThirdPartyProvider`<sup>Required</sup> <a name="ThirdPartyProvider" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.thirdPartyProvider"></a>

```go
func ThirdPartyProvider() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.eventarcChannel.EventarcChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcChannelConfig <a name="EventarcChannelConfig" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcchannel"

&eventarcchannel.EventarcChannelConfig {
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
	ThirdPartyProvider: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.eventarcChannel.EventarcChannelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.name">Name</a></code> | <code>*string</code> | Required. The resource name of the channel. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.cryptoKeyName">CryptoKeyName</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#id EventarcChannel#id}. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.thirdPartyProvider">ThirdPartyProvider</a></code> | <code>*string</code> | The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts">EventarcChannelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#location EventarcChannel#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Required. The resource name of the channel. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#name EventarcChannel#name}

---

##### `CryptoKeyName`<sup>Optional</sup> <a name="CryptoKeyName" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.cryptoKeyName"></a>

```go
CryptoKeyName *string
```

- *Type:* *string

Optional.

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/*\/locations/*\/keyRings/*\/cryptoKeys/*`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#crypto_key_name EventarcChannel#crypto_key_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#id EventarcChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#project EventarcChannel#project}

---

##### `ThirdPartyProvider`<sup>Optional</sup> <a name="ThirdPartyProvider" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.thirdPartyProvider"></a>

```go
ThirdPartyProvider *string
```

- *Type:* *string

The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#third_party_provider EventarcChannel#third_party_provider}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcChannel.EventarcChannelConfig.property.timeouts"></a>

```go
Timeouts EventarcChannelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts">EventarcChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#timeouts EventarcChannel#timeouts}

---

### EventarcChannelTimeouts <a name="EventarcChannelTimeouts" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcchannel"

&eventarcchannel.EventarcChannelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#create EventarcChannel#create}. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#delete EventarcChannel#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#update EventarcChannel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#create EventarcChannel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#delete EventarcChannel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_channel#update EventarcChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcChannelTimeoutsOutputReference <a name="EventarcChannelTimeoutsOutputReference" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/eventarcchannel"

eventarcchannel.NewEventarcChannelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventarcChannelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcChannel.EventarcChannelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



