# `cloudiotDevice` Submodule <a name="`cloudiotDevice` Submodule" id="@cdktf/provider-google.cloudiotDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudiotDevice <a name="CloudiotDevice" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device google_cloudiot_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDevice(scope Construct, id *string, config CloudiotDeviceConfig) CloudiotDevice
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig">CloudiotDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig">CloudiotDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putGatewayConfig">PutGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetBlocked">ResetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetGatewayConfig">ResetGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putCredentials"></a>

```go
func PutCredentials(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putCredentials.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGatewayConfig` <a name="PutGatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putGatewayConfig"></a>

```go
func PutGatewayConfig(value CloudiotDeviceGatewayConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putGatewayConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putTimeouts"></a>

```go
func PutTimeouts(value CloudiotDeviceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a>

---

##### `ResetBlocked` <a name="ResetBlocked" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetBlocked"></a>

```go
func ResetBlocked()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetGatewayConfig` <a name="ResetGatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetGatewayConfig"></a>

```go
func ResetGatewayConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetId"></a>

```go
func ResetId()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.CloudiotDevice_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.CloudiotDevice_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.CloudiotDevice_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList">CloudiotDeviceConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList">CloudiotDeviceCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.gatewayConfig">GatewayConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference">CloudiotDeviceGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastConfigAckTime">LastConfigAckTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastConfigSendTime">LastConfigSendTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastErrorStatus">LastErrorStatus</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList">CloudiotDeviceLastErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastErrorTime">LastErrorTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastEventTime">LastEventTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastHeartbeatTime">LastHeartbeatTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastStateTime">LastStateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.numId">NumId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.state">State</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList">CloudiotDeviceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference">CloudiotDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.blockedInput">BlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.credentialsInput">CredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.gatewayConfigInput">GatewayConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.registryInput">RegistryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.blocked">Blocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.registry">Registry</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.config"></a>

```go
func Config() CloudiotDeviceConfigAList
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList">CloudiotDeviceConfigAList</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.credentials"></a>

```go
func Credentials() CloudiotDeviceCredentialsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList">CloudiotDeviceCredentialsList</a>

---

##### `GatewayConfig`<sup>Required</sup> <a name="GatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.gatewayConfig"></a>

```go
func GatewayConfig() CloudiotDeviceGatewayConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference">CloudiotDeviceGatewayConfigOutputReference</a>

---

##### `LastConfigAckTime`<sup>Required</sup> <a name="LastConfigAckTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastConfigAckTime"></a>

```go
func LastConfigAckTime() *string
```

- *Type:* *string

---

##### `LastConfigSendTime`<sup>Required</sup> <a name="LastConfigSendTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastConfigSendTime"></a>

```go
func LastConfigSendTime() *string
```

- *Type:* *string

---

##### `LastErrorStatus`<sup>Required</sup> <a name="LastErrorStatus" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastErrorStatus"></a>

```go
func LastErrorStatus() CloudiotDeviceLastErrorStatusList
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList">CloudiotDeviceLastErrorStatusList</a>

---

##### `LastErrorTime`<sup>Required</sup> <a name="LastErrorTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastErrorTime"></a>

```go
func LastErrorTime() *string
```

- *Type:* *string

---

##### `LastEventTime`<sup>Required</sup> <a name="LastEventTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastEventTime"></a>

```go
func LastEventTime() *string
```

- *Type:* *string

---

##### `LastHeartbeatTime`<sup>Required</sup> <a name="LastHeartbeatTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastHeartbeatTime"></a>

```go
func LastHeartbeatTime() *string
```

- *Type:* *string

---

##### `LastStateTime`<sup>Required</sup> <a name="LastStateTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastStateTime"></a>

```go
func LastStateTime() *string
```

- *Type:* *string

---

##### `NumId`<sup>Required</sup> <a name="NumId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.numId"></a>

```go
func NumId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.state"></a>

```go
func State() CloudiotDeviceStateList
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList">CloudiotDeviceStateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.timeouts"></a>

```go
func Timeouts() CloudiotDeviceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference">CloudiotDeviceTimeoutsOutputReference</a>

---

##### `BlockedInput`<sup>Optional</sup> <a name="BlockedInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.blockedInput"></a>

```go
func BlockedInput() interface{}
```

- *Type:* interface{}

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.credentialsInput"></a>

```go
func CredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayConfigInput`<sup>Optional</sup> <a name="GatewayConfigInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.gatewayConfigInput"></a>

```go
func GatewayConfigInput() CloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.registryInput"></a>

```go
func RegistryInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Blocked`<sup>Required</sup> <a name="Blocked" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.blocked"></a>

```go
func Blocked() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.registry"></a>

```go
func Registry() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudiotDeviceConfig <a name="CloudiotDeviceConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

&cloudiotdevice.CloudiotDeviceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Registry: *string,
	Blocked: interface{},
	Credentials: interface{},
	GatewayConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudiotDevice.CloudiotDeviceGatewayConfig,
	Id: *string,
	LogLevel: *string,
	Metadata: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudiotDevice.CloudiotDeviceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.name">Name</a></code> | <code>*string</code> | A unique name for the resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.registry">Registry</a></code> | <code>*string</code> | The name of the device registry where this device should be created. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.blocked">Blocked</a></code> | <code>interface{}</code> | If a device is blocked, connections or requests from this device will fail. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.credentials">Credentials</a></code> | <code>interface{}</code> | credentials block. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.gatewayConfig">GatewayConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#id CloudiotDevice#id}. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | The metadata key-value pairs assigned to the device. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#name CloudiotDevice#name}

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.registry"></a>

```go
Registry *string
```

- *Type:* *string

The name of the device registry where this device should be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#registry CloudiotDevice#registry}

---

##### `Blocked`<sup>Optional</sup> <a name="Blocked" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.blocked"></a>

```go
Blocked interface{}
```

- *Type:* interface{}

If a device is blocked, connections or requests from this device will fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#blocked CloudiotDevice#blocked}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.credentials"></a>

```go
Credentials interface{}
```

- *Type:* interface{}

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#credentials CloudiotDevice#credentials}

---

##### `GatewayConfig`<sup>Optional</sup> <a name="GatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.gatewayConfig"></a>

```go
GatewayConfig CloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#gateway_config CloudiotDevice#gateway_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#id CloudiotDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#log_level CloudiotDevice#log_level}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

The metadata key-value pairs assigned to the device.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#metadata CloudiotDevice#metadata}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.timeouts"></a>

```go
Timeouts CloudiotDeviceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#timeouts CloudiotDevice#timeouts}

---

### CloudiotDeviceConfigA <a name="CloudiotDeviceConfigA" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

&cloudiotdevice.CloudiotDeviceConfigA {

}
```


### CloudiotDeviceCredentials <a name="CloudiotDeviceCredentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

&cloudiotdevice.CloudiotDeviceCredentials {
	PublicKey: github.com/cdktf/cdktf-provider-google-go/google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey,
	ExpirationTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a></code> | public_key block. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | The time at which this credential becomes invalid. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.property.publicKey"></a>

```go
PublicKey CloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a>

public_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#public_key CloudiotDevice#public_key}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.property.expirationTime"></a>

```go
ExpirationTime *string
```

- *Type:* *string

The time at which this credential becomes invalid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#expiration_time CloudiotDevice#expiration_time}

---

### CloudiotDeviceCredentialsPublicKey <a name="CloudiotDeviceCredentialsPublicKey" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

&cloudiotdevice.CloudiotDeviceCredentialsPublicKey {
	Format: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.property.format">Format</a></code> | <code>*string</code> | The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"]. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.property.key">Key</a></code> | <code>*string</code> | The key data. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.property.format"></a>

```go
Format *string
```

- *Type:* *string

The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#format CloudiotDevice#format}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#key CloudiotDevice#key}

---

### CloudiotDeviceGatewayConfig <a name="CloudiotDeviceGatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

&cloudiotdevice.CloudiotDeviceGatewayConfig {
	GatewayAuthMethod: *string,
	GatewayType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.property.gatewayAuthMethod">GatewayAuthMethod</a></code> | <code>*string</code> | Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"]. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.property.gatewayType">GatewayType</a></code> | <code>*string</code> | Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"]. |

---

##### `GatewayAuthMethod`<sup>Optional</sup> <a name="GatewayAuthMethod" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.property.gatewayAuthMethod"></a>

```go
GatewayAuthMethod *string
```

- *Type:* *string

Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#gateway_auth_method CloudiotDevice#gateway_auth_method}

---

##### `GatewayType`<sup>Optional</sup> <a name="GatewayType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.property.gatewayType"></a>

```go
GatewayType *string
```

- *Type:* *string

Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#gateway_type CloudiotDevice#gateway_type}

---

### CloudiotDeviceLastErrorStatus <a name="CloudiotDeviceLastErrorStatus" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

&cloudiotdevice.CloudiotDeviceLastErrorStatus {

}
```


### CloudiotDeviceState <a name="CloudiotDeviceState" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

&cloudiotdevice.CloudiotDeviceState {

}
```


### CloudiotDeviceTimeouts <a name="CloudiotDeviceTimeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

&cloudiotdevice.CloudiotDeviceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#create CloudiotDevice#create}. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#delete CloudiotDevice#delete}. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#update CloudiotDevice#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#create CloudiotDevice#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#delete CloudiotDevice#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#update CloudiotDevice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudiotDeviceConfigAList <a name="CloudiotDeviceConfigAList" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudiotDeviceConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.get"></a>

```go
func Get(index *f64) CloudiotDeviceConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudiotDeviceConfigAOutputReference <a name="CloudiotDeviceConfigAOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudiotDeviceConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.binaryData">BinaryData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.cloudUpdateTime">CloudUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.deviceAckTime">DeviceAckTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigA">CloudiotDeviceConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryData`<sup>Required</sup> <a name="BinaryData" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.binaryData"></a>

```go
func BinaryData() *string
```

- *Type:* *string

---

##### `CloudUpdateTime`<sup>Required</sup> <a name="CloudUpdateTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.cloudUpdateTime"></a>

```go
func CloudUpdateTime() *string
```

- *Type:* *string

---

##### `DeviceAckTime`<sup>Required</sup> <a name="DeviceAckTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.deviceAckTime"></a>

```go
func DeviceAckTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudiotDeviceConfigA
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigA">CloudiotDeviceConfigA</a>

---


### CloudiotDeviceCredentialsList <a name="CloudiotDeviceCredentialsList" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudiotDeviceCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.get"></a>

```go
func Get(index *f64) CloudiotDeviceCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudiotDeviceCredentialsOutputReference <a name="CloudiotDeviceCredentialsOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudiotDeviceCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.putPublicKey">PutPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicKey` <a name="PutPublicKey" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.putPublicKey"></a>

```go
func PutPublicKey(value CloudiotDeviceCredentialsPublicKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.putPublicKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a>

---

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resetExpirationTime"></a>

```go
func ResetExpirationTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference">CloudiotDeviceCredentialsPublicKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.publicKey"></a>

```go
func PublicKey() CloudiotDeviceCredentialsPublicKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference">CloudiotDeviceCredentialsPublicKeyOutputReference</a>

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.expirationTimeInput"></a>

```go
func ExpirationTimeInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() CloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a>

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudiotDeviceCredentialsPublicKeyOutputReference <a name="CloudiotDeviceCredentialsPublicKeyOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceCredentialsPublicKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudiotDeviceCredentialsPublicKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a>

---


### CloudiotDeviceGatewayConfigOutputReference <a name="CloudiotDeviceGatewayConfigOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceGatewayConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudiotDeviceGatewayConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod">ResetGatewayAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resetGatewayType">ResetGatewayType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGatewayAuthMethod` <a name="ResetGatewayAuthMethod" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod"></a>

```go
func ResetGatewayAuthMethod()
```

##### `ResetGatewayType` <a name="ResetGatewayType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resetGatewayType"></a>

```go
func ResetGatewayType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId">LastAccessedGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime">LastAccessedGatewayTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput">GatewayAuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput">GatewayTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod">GatewayAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayType">GatewayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastAccessedGatewayId`<sup>Required</sup> <a name="LastAccessedGatewayId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId"></a>

```go
func LastAccessedGatewayId() *string
```

- *Type:* *string

---

##### `LastAccessedGatewayTime`<sup>Required</sup> <a name="LastAccessedGatewayTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime"></a>

```go
func LastAccessedGatewayTime() *string
```

- *Type:* *string

---

##### `GatewayAuthMethodInput`<sup>Optional</sup> <a name="GatewayAuthMethodInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput"></a>

```go
func GatewayAuthMethodInput() *string
```

- *Type:* *string

---

##### `GatewayTypeInput`<sup>Optional</sup> <a name="GatewayTypeInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput"></a>

```go
func GatewayTypeInput() *string
```

- *Type:* *string

---

##### `GatewayAuthMethod`<sup>Required</sup> <a name="GatewayAuthMethod" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod"></a>

```go
func GatewayAuthMethod() *string
```

- *Type:* *string

---

##### `GatewayType`<sup>Required</sup> <a name="GatewayType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayType"></a>

```go
func GatewayType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a>

---


### CloudiotDeviceLastErrorStatusList <a name="CloudiotDeviceLastErrorStatusList" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceLastErrorStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudiotDeviceLastErrorStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.get"></a>

```go
func Get(index *f64) CloudiotDeviceLastErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudiotDeviceLastErrorStatusOutputReference <a name="CloudiotDeviceLastErrorStatusOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceLastErrorStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudiotDeviceLastErrorStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.details">Details</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatus">CloudiotDeviceLastErrorStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudiotDeviceLastErrorStatus
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatus">CloudiotDeviceLastErrorStatus</a>

---


### CloudiotDeviceStateList <a name="CloudiotDeviceStateList" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudiotDeviceStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.get"></a>

```go
func Get(index *f64) CloudiotDeviceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudiotDeviceStateOutputReference <a name="CloudiotDeviceStateOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudiotDeviceStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.binaryData">BinaryData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceState">CloudiotDeviceState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryData`<sup>Required</sup> <a name="BinaryData" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.binaryData"></a>

```go
func BinaryData() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudiotDeviceState
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceState">CloudiotDeviceState</a>

---


### CloudiotDeviceTimeoutsOutputReference <a name="CloudiotDeviceTimeoutsOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudiotdevice"

cloudiotdevice.NewCloudiotDeviceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudiotDeviceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



