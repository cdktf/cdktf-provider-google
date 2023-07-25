# `google_cloudiot_device`

Refer to the Terraform Registory for docs: [`google_cloudiot_device`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device).

# `cloudiotDevice` Submodule <a name="`cloudiotDevice` Submodule" id="@cdktf/provider-google.cloudiotDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudiotDevice <a name="CloudiotDevice" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device google_cloudiot_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDevice(scope: Construct, id: string, config: CloudiotDeviceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig">CloudiotDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig">CloudiotDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putGatewayConfig">putGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetBlocked">resetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetGatewayConfig">resetGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putCredentials"></a>

```typescript
public putCredentials(value: IResolvable | CloudiotDeviceCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putCredentials.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a>[]

---

##### `putGatewayConfig` <a name="putGatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putGatewayConfig"></a>

```typescript
public putGatewayConfig(value: CloudiotDeviceGatewayConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putGatewayConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudiotDeviceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a>

---

##### `resetBlocked` <a name="resetBlocked" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetBlocked"></a>

```typescript
public resetBlocked(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetGatewayConfig` <a name="resetGatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetGatewayConfig"></a>

```typescript
public resetGatewayConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isConstruct"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

cloudiotDevice.CloudiotDevice.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformElement"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

cloudiotDevice.CloudiotDevice.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformResource"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

cloudiotDevice.CloudiotDevice.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList">CloudiotDeviceConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList">CloudiotDeviceCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.gatewayConfig">gatewayConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference">CloudiotDeviceGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastConfigAckTime">lastConfigAckTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastConfigSendTime">lastConfigSendTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastErrorStatus">lastErrorStatus</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList">CloudiotDeviceLastErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastErrorTime">lastErrorTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastEventTime">lastEventTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastHeartbeatTime">lastHeartbeatTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastStateTime">lastStateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.numId">numId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList">CloudiotDeviceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference">CloudiotDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.blockedInput">blockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.credentialsInput">credentialsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.gatewayConfigInput">gatewayConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.registryInput">registryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.blocked">blocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.registry">registry</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.config"></a>

```typescript
public readonly config: CloudiotDeviceConfigAList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList">CloudiotDeviceConfigAList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.credentials"></a>

```typescript
public readonly credentials: CloudiotDeviceCredentialsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList">CloudiotDeviceCredentialsList</a>

---

##### `gatewayConfig`<sup>Required</sup> <a name="gatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.gatewayConfig"></a>

```typescript
public readonly gatewayConfig: CloudiotDeviceGatewayConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference">CloudiotDeviceGatewayConfigOutputReference</a>

---

##### `lastConfigAckTime`<sup>Required</sup> <a name="lastConfigAckTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastConfigAckTime"></a>

```typescript
public readonly lastConfigAckTime: string;
```

- *Type:* string

---

##### `lastConfigSendTime`<sup>Required</sup> <a name="lastConfigSendTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastConfigSendTime"></a>

```typescript
public readonly lastConfigSendTime: string;
```

- *Type:* string

---

##### `lastErrorStatus`<sup>Required</sup> <a name="lastErrorStatus" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastErrorStatus"></a>

```typescript
public readonly lastErrorStatus: CloudiotDeviceLastErrorStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList">CloudiotDeviceLastErrorStatusList</a>

---

##### `lastErrorTime`<sup>Required</sup> <a name="lastErrorTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastErrorTime"></a>

```typescript
public readonly lastErrorTime: string;
```

- *Type:* string

---

##### `lastEventTime`<sup>Required</sup> <a name="lastEventTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastEventTime"></a>

```typescript
public readonly lastEventTime: string;
```

- *Type:* string

---

##### `lastHeartbeatTime`<sup>Required</sup> <a name="lastHeartbeatTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastHeartbeatTime"></a>

```typescript
public readonly lastHeartbeatTime: string;
```

- *Type:* string

---

##### `lastStateTime`<sup>Required</sup> <a name="lastStateTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.lastStateTime"></a>

```typescript
public readonly lastStateTime: string;
```

- *Type:* string

---

##### `numId`<sup>Required</sup> <a name="numId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.numId"></a>

```typescript
public readonly numId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.state"></a>

```typescript
public readonly state: CloudiotDeviceStateList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList">CloudiotDeviceStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.timeouts"></a>

```typescript
public readonly timeouts: CloudiotDeviceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference">CloudiotDeviceTimeoutsOutputReference</a>

---

##### `blockedInput`<sup>Optional</sup> <a name="blockedInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.blockedInput"></a>

```typescript
public readonly blockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IResolvable | CloudiotDeviceCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a>[]

---

##### `gatewayConfigInput`<sup>Optional</sup> <a name="gatewayConfigInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.gatewayConfigInput"></a>

```typescript
public readonly gatewayConfigInput: CloudiotDeviceGatewayConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.registryInput"></a>

```typescript
public readonly registryInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudiotDeviceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a>

---

##### `blocked`<sup>Required</sup> <a name="blocked" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.blocked"></a>

```typescript
public readonly blocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDevice.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudiotDeviceConfig <a name="CloudiotDeviceConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

const cloudiotDeviceConfig: cloudiotDevice.CloudiotDeviceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.name">name</a></code> | <code>string</code> | A unique name for the resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.registry">registry</a></code> | <code>string</code> | The name of the device registry where this device should be created. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.blocked">blocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | If a device is blocked, connections or requests from this device will fail. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.credentials">credentials</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a>[]</code> | credentials block. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.gatewayConfig">gatewayConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#id CloudiotDevice#id}. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.logLevel">logLevel</a></code> | <code>string</code> | The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | The metadata key-value pairs assigned to the device. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique name for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#name CloudiotDevice#name}

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

The name of the device registry where this device should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#registry CloudiotDevice#registry}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.blocked"></a>

```typescript
public readonly blocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If a device is blocked, connections or requests from this device will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#blocked CloudiotDevice#blocked}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.credentials"></a>

```typescript
public readonly credentials: IResolvable | CloudiotDeviceCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a>[]

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#credentials CloudiotDevice#credentials}

---

##### `gatewayConfig`<sup>Optional</sup> <a name="gatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.gatewayConfig"></a>

```typescript
public readonly gatewayConfig: CloudiotDeviceGatewayConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#gateway_config CloudiotDevice#gateway_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#id CloudiotDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#log_level CloudiotDevice#log_level}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The metadata key-value pairs assigned to the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#metadata CloudiotDevice#metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudiotDeviceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#timeouts CloudiotDevice#timeouts}

---

### CloudiotDeviceConfigA <a name="CloudiotDeviceConfigA" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigA.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

const cloudiotDeviceConfigA: cloudiotDevice.CloudiotDeviceConfigA = { ... }
```


### CloudiotDeviceCredentials <a name="CloudiotDeviceCredentials" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

const cloudiotDeviceCredentials: cloudiotDevice.CloudiotDeviceCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a></code> | public_key block. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.property.expirationTime">expirationTime</a></code> | <code>string</code> | The time at which this credential becomes invalid. |

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.property.publicKey"></a>

```typescript
public readonly publicKey: CloudiotDeviceCredentialsPublicKey;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a>

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#public_key CloudiotDevice#public_key}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

The time at which this credential becomes invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#expiration_time CloudiotDevice#expiration_time}

---

### CloudiotDeviceCredentialsPublicKey <a name="CloudiotDeviceCredentialsPublicKey" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

const cloudiotDeviceCredentialsPublicKey: cloudiotDevice.CloudiotDeviceCredentialsPublicKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.property.format">format</a></code> | <code>string</code> | The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"]. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.property.key">key</a></code> | <code>string</code> | The key data. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#format CloudiotDevice#format}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#key CloudiotDevice#key}

---

### CloudiotDeviceGatewayConfig <a name="CloudiotDeviceGatewayConfig" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

const cloudiotDeviceGatewayConfig: cloudiotDevice.CloudiotDeviceGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.property.gatewayAuthMethod">gatewayAuthMethod</a></code> | <code>string</code> | Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"]. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.property.gatewayType">gatewayType</a></code> | <code>string</code> | Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"]. |

---

##### `gatewayAuthMethod`<sup>Optional</sup> <a name="gatewayAuthMethod" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.property.gatewayAuthMethod"></a>

```typescript
public readonly gatewayAuthMethod: string;
```

- *Type:* string

Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#gateway_auth_method CloudiotDevice#gateway_auth_method}

---

##### `gatewayType`<sup>Optional</sup> <a name="gatewayType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig.property.gatewayType"></a>

```typescript
public readonly gatewayType: string;
```

- *Type:* string

Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#gateway_type CloudiotDevice#gateway_type}

---

### CloudiotDeviceLastErrorStatus <a name="CloudiotDeviceLastErrorStatus" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatus.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

const cloudiotDeviceLastErrorStatus: cloudiotDevice.CloudiotDeviceLastErrorStatus = { ... }
```


### CloudiotDeviceState <a name="CloudiotDeviceState" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceState.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

const cloudiotDeviceState: cloudiotDevice.CloudiotDeviceState = { ... }
```


### CloudiotDeviceTimeouts <a name="CloudiotDeviceTimeouts" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

const cloudiotDeviceTimeouts: cloudiotDevice.CloudiotDeviceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#create CloudiotDevice#create}. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#delete CloudiotDevice#delete}. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#update CloudiotDevice#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#create CloudiotDevice#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#delete CloudiotDevice#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_device#update CloudiotDevice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudiotDeviceConfigAList <a name="CloudiotDeviceConfigAList" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.get"></a>

```typescript
public get(index: number): CloudiotDeviceConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudiotDeviceConfigAOutputReference <a name="CloudiotDeviceConfigAOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.binaryData">binaryData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.cloudUpdateTime">cloudUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.deviceAckTime">deviceAckTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigA">CloudiotDeviceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryData`<sup>Required</sup> <a name="binaryData" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.binaryData"></a>

```typescript
public readonly binaryData: string;
```

- *Type:* string

---

##### `cloudUpdateTime`<sup>Required</sup> <a name="cloudUpdateTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.cloudUpdateTime"></a>

```typescript
public readonly cloudUpdateTime: string;
```

- *Type:* string

---

##### `deviceAckTime`<sup>Required</sup> <a name="deviceAckTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.deviceAckTime"></a>

```typescript
public readonly deviceAckTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudiotDeviceConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceConfigA">CloudiotDeviceConfigA</a>

---


### CloudiotDeviceCredentialsList <a name="CloudiotDeviceCredentialsList" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.get"></a>

```typescript
public get(index: number): CloudiotDeviceCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudiotDeviceCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a>[]

---


### CloudiotDeviceCredentialsOutputReference <a name="CloudiotDeviceCredentialsOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.putPublicKey">putPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicKey` <a name="putPublicKey" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.putPublicKey"></a>

```typescript
public putPublicKey(value: CloudiotDeviceCredentialsPublicKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.putPublicKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a>

---

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.resetExpirationTime"></a>

```typescript
public resetExpirationTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference">CloudiotDeviceCredentialsPublicKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.expirationTimeInput">expirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: CloudiotDeviceCredentialsPublicKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference">CloudiotDeviceCredentialsPublicKeyOutputReference</a>

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.expirationTimeInput"></a>

```typescript
public readonly expirationTimeInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: CloudiotDeviceCredentialsPublicKey;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudiotDeviceCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentials">CloudiotDeviceCredentials</a>

---


### CloudiotDeviceCredentialsPublicKeyOutputReference <a name="CloudiotDeviceCredentialsPublicKeyOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudiotDeviceCredentialsPublicKey;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceCredentialsPublicKey">CloudiotDeviceCredentialsPublicKey</a>

---


### CloudiotDeviceGatewayConfigOutputReference <a name="CloudiotDeviceGatewayConfigOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod">resetGatewayAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resetGatewayType">resetGatewayType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGatewayAuthMethod` <a name="resetGatewayAuthMethod" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod"></a>

```typescript
public resetGatewayAuthMethod(): void
```

##### `resetGatewayType` <a name="resetGatewayType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.resetGatewayType"></a>

```typescript
public resetGatewayType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId">lastAccessedGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime">lastAccessedGatewayTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput">gatewayAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput">gatewayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod">gatewayAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayType">gatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastAccessedGatewayId`<sup>Required</sup> <a name="lastAccessedGatewayId" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId"></a>

```typescript
public readonly lastAccessedGatewayId: string;
```

- *Type:* string

---

##### `lastAccessedGatewayTime`<sup>Required</sup> <a name="lastAccessedGatewayTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime"></a>

```typescript
public readonly lastAccessedGatewayTime: string;
```

- *Type:* string

---

##### `gatewayAuthMethodInput`<sup>Optional</sup> <a name="gatewayAuthMethodInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput"></a>

```typescript
public readonly gatewayAuthMethodInput: string;
```

- *Type:* string

---

##### `gatewayTypeInput`<sup>Optional</sup> <a name="gatewayTypeInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput"></a>

```typescript
public readonly gatewayTypeInput: string;
```

- *Type:* string

---

##### `gatewayAuthMethod`<sup>Required</sup> <a name="gatewayAuthMethod" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod"></a>

```typescript
public readonly gatewayAuthMethod: string;
```

- *Type:* string

---

##### `gatewayType`<sup>Required</sup> <a name="gatewayType" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.gatewayType"></a>

```typescript
public readonly gatewayType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudiotDeviceGatewayConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceGatewayConfig">CloudiotDeviceGatewayConfig</a>

---


### CloudiotDeviceLastErrorStatusList <a name="CloudiotDeviceLastErrorStatusList" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceLastErrorStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.get"></a>

```typescript
public get(index: number): CloudiotDeviceLastErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudiotDeviceLastErrorStatusOutputReference <a name="CloudiotDeviceLastErrorStatusOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatus">CloudiotDeviceLastErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudiotDeviceLastErrorStatus;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceLastErrorStatus">CloudiotDeviceLastErrorStatus</a>

---


### CloudiotDeviceStateList <a name="CloudiotDeviceStateList" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.get"></a>

```typescript
public get(index: number): CloudiotDeviceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudiotDeviceStateOutputReference <a name="CloudiotDeviceStateOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.binaryData">binaryData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceState">CloudiotDeviceState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryData`<sup>Required</sup> <a name="binaryData" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.binaryData"></a>

```typescript
public readonly binaryData: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudiotDeviceState;
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceState">CloudiotDeviceState</a>

---


### CloudiotDeviceTimeoutsOutputReference <a name="CloudiotDeviceTimeoutsOutputReference" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudiotDevice } from '@cdktf/provider-google'

new cloudiotDevice.CloudiotDeviceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudiotDeviceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudiotDevice.CloudiotDeviceTimeouts">CloudiotDeviceTimeouts</a>

---



