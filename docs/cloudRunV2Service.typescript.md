# `cloudRunV2Service` Submodule <a name="`cloudRunV2Service` Submodule" id="@cdktf/provider-google.cloudRunV2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2Service <a name="CloudRunV2Service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service google_cloud_run_v2_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2Service(scope: Construct, id: string, config: CloudRunV2ServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig">CloudRunV2ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig">CloudRunV2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic">putTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClientVersion">resetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTraffic">resetTraffic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization"></a>

```typescript
public putBinaryAuthorization(value: CloudRunV2ServiceBinaryAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate"></a>

```typescript
public putTemplate(value: CloudRunV2ServiceTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudRunV2ServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>

---

##### `putTraffic` <a name="putTraffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic"></a>

```typescript
public putTraffic(value: IResolvable | CloudRunV2ServiceTraffic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>[]

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetBinaryAuthorization"></a>

```typescript
public resetBinaryAuthorization(): void
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClient"></a>

```typescript
public resetClient(): void
```

##### `resetClientVersion` <a name="resetClientVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClientVersion"></a>

```typescript
public resetClientVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLaunchStage"></a>

```typescript
public resetLaunchStage(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTraffic` <a name="resetTraffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTraffic"></a>

```typescript
public resetTraffic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

cloudRunV2Service.CloudRunV2Service.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

cloudRunV2Service.CloudRunV2Service.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

cloudRunV2Service.CloudRunV2Service.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference">CloudRunV2ServiceBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList">CloudRunV2ServiceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestCreatedRevision">latestCreatedRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestReadyRevision">latestReadyRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.observedGeneration">observedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference">CloudRunV2ServiceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList">CloudRunV2ServiceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference">CloudRunV2ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList">CloudRunV2ServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficStatuses">trafficStatuses</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList">CloudRunV2ServiceTrafficStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientInput">clientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersionInput">clientVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingressInput">ingressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStageInput">launchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficInput">trafficInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.client">client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingress">ingress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStage">launchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: CloudRunV2ServiceBinaryAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference">CloudRunV2ServiceBinaryAuthorizationOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.conditions"></a>

```typescript
public readonly conditions: CloudRunV2ServiceConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList">CloudRunV2ServiceConditionsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `latestCreatedRevision`<sup>Required</sup> <a name="latestCreatedRevision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestCreatedRevision"></a>

```typescript
public readonly latestCreatedRevision: string;
```

- *Type:* string

---

##### `latestReadyRevision`<sup>Required</sup> <a name="latestReadyRevision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestReadyRevision"></a>

```typescript
public readonly latestReadyRevision: string;
```

- *Type:* string

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.observedGeneration"></a>

```typescript
public readonly observedGeneration: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.template"></a>

```typescript
public readonly template: CloudRunV2ServiceTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference">CloudRunV2ServiceTemplateOutputReference</a>

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terminalCondition"></a>

```typescript
public readonly terminalCondition: CloudRunV2ServiceTerminalConditionList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList">CloudRunV2ServiceTerminalConditionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeouts"></a>

```typescript
public readonly timeouts: CloudRunV2ServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference">CloudRunV2ServiceTimeoutsOutputReference</a>

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.traffic"></a>

```typescript
public readonly traffic: CloudRunV2ServiceTrafficList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList">CloudRunV2ServiceTrafficList</a>

---

##### `trafficStatuses`<sup>Required</sup> <a name="trafficStatuses" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficStatuses"></a>

```typescript
public readonly trafficStatuses: CloudRunV2ServiceTrafficStatusesList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList">CloudRunV2ServiceTrafficStatusesList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorizationInput"></a>

```typescript
public readonly binaryAuthorizationInput: CloudRunV2ServiceBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientInput"></a>

```typescript
public readonly clientInput: string;
```

- *Type:* string

---

##### `clientVersionInput`<sup>Optional</sup> <a name="clientVersionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersionInput"></a>

```typescript
public readonly clientVersionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingressInput"></a>

```typescript
public readonly ingressInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStageInput"></a>

```typescript
public readonly launchStageInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.templateInput"></a>

```typescript
public readonly templateInput: CloudRunV2ServiceTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CloudRunV2ServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a> | cdktf.IResolvable

---

##### `trafficInput`<sup>Optional</sup> <a name="trafficInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficInput"></a>

```typescript
public readonly trafficInput: IResolvable | CloudRunV2ServiceTraffic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>[]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingress"></a>

```typescript
public readonly ingress: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2ServiceBinaryAuthorization <a name="CloudRunV2ServiceBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceBinaryAuthorization: cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.breakglassJustification">breakglassJustification</a></code> | <code>string</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.useDefault">useDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `breakglassJustification`<sup>Optional</sup> <a name="breakglassJustification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.breakglassJustification"></a>

```typescript
public readonly breakglassJustification: string;
```

- *Type:* string

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#breakglass_justification CloudRunV2Service#breakglass_justification}

---

##### `useDefault`<sup>Optional</sup> <a name="useDefault" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.useDefault"></a>

```typescript
public readonly useDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#use_default CloudRunV2Service#use_default}

---

### CloudRunV2ServiceConditions <a name="CloudRunV2ServiceConditions" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceConditions: cloudRunV2Service.CloudRunV2ServiceConditions = { ... }
```


### CloudRunV2ServiceConfig <a name="CloudRunV2ServiceConfig" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceConfig: cloudRunV2Service.CloudRunV2ServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.name">name</a></code> | <code>string</code> | Name of the Service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.client">client</a></code> | <code>string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.clientVersion">clientVersion</a></code> | <code>string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.description">description</a></code> | <code>string</code> | User-provided description of the Service. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#id CloudRunV2Service#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.ingress">ingress</a></code> | <code>string</code> | Provides the ingress settings for this Service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.launchStage">launchStage</a></code> | <code>string</code> | The launch stage as defined by Google Cloud Platform Launch Stages. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.location">location</a></code> | <code>string</code> | The location of the cloud run service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#project CloudRunV2Service#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.traffic">traffic</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>[]</code> | traffic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.template"></a>

```typescript
public readonly template: CloudRunV2ServiceTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#template CloudRunV2Service#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects. Cloud Run will populate some annotations using 'run.googleapis.com' or 'serving.knative.dev' namespaces. This field follows Kubernetes annotations' namespacing, limits, and rules. More info: https://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#annotations CloudRunV2Service#annotations}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: CloudRunV2ServiceBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#binary_authorization CloudRunV2Service#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#client CloudRunV2Service#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#client_version CloudRunV2Service#client_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description of the Service. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#description CloudRunV2Service#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#id CloudRunV2Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.ingress"></a>

```typescript
public readonly ingress: string;
```

- *Type:* string

Provides the ingress settings for this Service.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#ingress CloudRunV2Service#ingress}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#labels CloudRunV2Service#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

The launch stage as defined by Google Cloud Platform Launch Stages.

Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#launch_stage CloudRunV2Service#launch_stage}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the cloud run service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#location CloudRunV2Service#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#project CloudRunV2Service#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudRunV2ServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#timeouts CloudRunV2Service#timeouts}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.traffic"></a>

```typescript
public readonly traffic: IResolvable | CloudRunV2ServiceTraffic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>[]

traffic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#traffic CloudRunV2Service#traffic}

---

### CloudRunV2ServiceTemplate <a name="CloudRunV2ServiceTemplate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplate: cloudRunV2Service.CloudRunV2ServiceTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | KRM-style annotations for the resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.containers">containers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>[]</code> | containers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.executionEnvironment">executionEnvironment</a></code> | <code>string</code> | The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | KRM-style labels for the resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>number</code> | Sets the maximum number of requests that each serving instance can receive. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.revision">revision</a></code> | <code>string</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Email address of the IAM service account associated with the revision of the service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.timeout">timeout</a></code> | <code>string</code> | Max allowed time for an instance to respond to a request. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.volumes">volumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>[]</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

KRM-style annotations for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#annotations CloudRunV2Service#annotations}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.containers"></a>

```typescript
public readonly containers: IResolvable | CloudRunV2ServiceTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#containers CloudRunV2Service#containers}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#encryption_key CloudRunV2Service#encryption_key}

---

##### `executionEnvironment`<sup>Optional</sup> <a name="executionEnvironment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.executionEnvironment"></a>

```typescript
public readonly executionEnvironment: string;
```

- *Type:* string

The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#execution_environment CloudRunV2Service#execution_environment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

KRM-style labels for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#labels CloudRunV2Service#labels}

---

##### `maxInstanceRequestConcurrency`<sup>Optional</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency"></a>

```typescript
public readonly maxInstanceRequestConcurrency: number;
```

- *Type:* number

Sets the maximum number of requests that each serving instance can receive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#max_instance_request_concurrency CloudRunV2Service#max_instance_request_concurrency}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the Service name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#revision CloudRunV2Service#revision}

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.scaling"></a>

```typescript
public readonly scaling: CloudRunV2ServiceTemplateScaling;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#scaling CloudRunV2Service#scaling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Email address of the IAM service account associated with the revision of the service.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#service_account CloudRunV2Service#service_account}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Max allowed time for an instance to respond to a request.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#timeout CloudRunV2Service#timeout}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | CloudRunV2ServiceTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#volumes CloudRunV2Service#volumes}

---

##### `vpcAccess`<sup>Optional</sup> <a name="vpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: CloudRunV2ServiceTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#vpc_access CloudRunV2Service#vpc_access}

---

### CloudRunV2ServiceTemplateContainers <a name="CloudRunV2ServiceTemplateContainers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainers: cloudRunV2Service.CloudRunV2ServiceTemplateContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.image">image</a></code> | <code>string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.args">args</a></code> | <code>string[]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.command">command</a></code> | <code>string[]</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.name">name</a></code> | <code>string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>[]</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.workingDir">workingDir</a></code> | <code>string</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#image CloudRunV2Service#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#args CloudRunV2Service#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#command CloudRunV2Service#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.env"></a>

```typescript
public readonly env: IResolvable | CloudRunV2ServiceTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#env CloudRunV2Service#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: CloudRunV2ServiceTemplateContainersLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#liveness_probe CloudRunV2Service#liveness_probe}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.ports"></a>

```typescript
public readonly ports: IResolvable | CloudRunV2ServiceTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#ports CloudRunV2Service#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.resources"></a>

```typescript
public readonly resources: CloudRunV2ServiceTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#resources CloudRunV2Service#resources}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.startupProbe"></a>

```typescript
public readonly startupProbe: CloudRunV2ServiceTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#startup_probe CloudRunV2Service#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | CloudRunV2ServiceTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#volume_mounts CloudRunV2Service#volume_mounts}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#working_dir CloudRunV2Service#working_dir}

---

### CloudRunV2ServiceTemplateContainersEnv <a name="CloudRunV2ServiceTemplateContainersEnv" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersEnv: cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.value">value</a></code> | <code>string</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#value CloudRunV2Service#value}

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.valueSource"></a>

```typescript
public readonly valueSource: CloudRunV2ServiceTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#value_source CloudRunV2Service#value_source}

---

### CloudRunV2ServiceTemplateContainersEnvValueSource <a name="CloudRunV2ServiceTemplateContainersEnvValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersEnvValueSource: cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#secret_key_ref CloudRunV2Service#secret_key_ref}

---

### CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef: cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#version CloudRunV2Service#version}

---

### CloudRunV2ServiceTemplateContainersLivenessProbe <a name="CloudRunV2ServiceTemplateContainersLivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersLivenessProbe: cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Number of seconds after which the probe times out. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#http_get CloudRunV2Service#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersLivenessProbeHttpGet: cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path">path</a></code> | <code>string</code> | Path to access on the HTTP server. Defaults to '/'. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#path CloudRunV2Service#path}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders: cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header field name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header field value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#value CloudRunV2Service#value}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket <a name="CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket: cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port">port</a></code> | <code>number</code> | Port number to access on the container. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number to access on the container.

Must be in the range 1 to 65535. If not specified, defaults to 8080.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#port CloudRunV2Service#port}

---

### CloudRunV2ServiceTemplateContainersPorts <a name="CloudRunV2ServiceTemplateContainersPorts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersPorts: cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.containerPort">containerPort</a></code> | <code>number</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.name">name</a></code> | <code>string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#container_port CloudRunV2Service#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

### CloudRunV2ServiceTemplateContainersResources <a name="CloudRunV2ServiceTemplateContainersResources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersResources: cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.cpuIdle">cpuIdle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether CPU should be throttled or not outside of requests. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Only memory and CPU are supported. |

---

##### `cpuIdle`<sup>Optional</sup> <a name="cpuIdle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.cpuIdle"></a>

```typescript
public readonly cpuIdle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether CPU should be throttled or not outside of requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#cpu_idle CloudRunV2Service#cpu_idle}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Only memory and CPU are supported.

Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#limits CloudRunV2Service#limits}

---

### CloudRunV2ServiceTemplateContainersStartupProbe <a name="CloudRunV2ServiceTemplateContainersStartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersStartupProbe: cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Number of seconds after which the probe times out. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#http_get CloudRunV2Service#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}

---

### CloudRunV2ServiceTemplateContainersStartupProbeHttpGet <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersStartupProbeHttpGet: cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path">path</a></code> | <code>string</code> | Path to access on the HTTP server. Defaults to '/'. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#path CloudRunV2Service#path}

---

### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders: cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header field name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header field value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#value CloudRunV2Service#value}

---

### CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket <a name="CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersStartupProbeTcpSocket: cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>number</code> | Port number to access on the container. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number to access on the container.

Must be in the range 1 to 65535. If not specified, defaults to 8080.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#port CloudRunV2Service#port}

---

### CloudRunV2ServiceTemplateContainersVolumeMounts <a name="CloudRunV2ServiceTemplateContainersVolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateContainersVolumeMounts: cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.name">name</a></code> | <code>string</code> | This must match the Name of a Volume. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#mount_path CloudRunV2Service#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

### CloudRunV2ServiceTemplateScaling <a name="CloudRunV2ServiceTemplateScaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateScaling: cloudRunV2Service.CloudRunV2ServiceTemplateScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Maximum number of serving instances that this resource should have. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | Minimum number of serving instances that this resource should have. |

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Maximum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#max_instance_count CloudRunV2Service#max_instance_count}

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

Minimum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#min_instance_count CloudRunV2Service#min_instance_count}

---

### CloudRunV2ServiceTemplateVolumes <a name="CloudRunV2ServiceTemplateVolumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateVolumes: cloudRunV2Service.CloudRunV2ServiceTemplateVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.name">name</a></code> | <code>string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Volume's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `cloudSqlInstance`<sup>Optional</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: CloudRunV2ServiceTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#cloud_sql_instance CloudRunV2Service#cloud_sql_instance}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.secret"></a>

```typescript
public readonly secret: CloudRunV2ServiceTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

### CloudRunV2ServiceTemplateVolumesCloudSqlInstance <a name="CloudRunV2ServiceTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateVolumesCloudSqlInstance: cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>string[]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#instances CloudRunV2Service#instances}

---

### CloudRunV2ServiceTemplateVolumesSecret <a name="CloudRunV2ServiceTemplateVolumesSecret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateVolumesSecret: cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.defaultMode">defaultMode</a></code> | <code>number</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>[]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#default_mode CloudRunV2Service#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.items"></a>

```typescript
public readonly items: IResolvable | CloudRunV2ServiceTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>[]

items block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#items CloudRunV2Service#items}

---

### CloudRunV2ServiceTemplateVolumesSecretItems <a name="CloudRunV2ServiceTemplateVolumesSecretItems" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateVolumesSecretItems: cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.mode">mode</a></code> | <code>number</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.path">path</a></code> | <code>string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#mode CloudRunV2Service#mode}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#path CloudRunV2Service#path}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#version CloudRunV2Service#version}

---

### CloudRunV2ServiceTemplateVpcAccess <a name="CloudRunV2ServiceTemplateVpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTemplateVpcAccess: cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.connector">connector</a></code> | <code>string</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.egress">egress</a></code> | <code>string</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#connector CloudRunV2Service#connector}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.egress"></a>

```typescript
public readonly egress: string;
```

- *Type:* string

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#egress CloudRunV2Service#egress}

---

### CloudRunV2ServiceTerminalCondition <a name="CloudRunV2ServiceTerminalCondition" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTerminalCondition: cloudRunV2Service.CloudRunV2ServiceTerminalCondition = { ... }
```


### CloudRunV2ServiceTimeouts <a name="CloudRunV2ServiceTimeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTimeouts: cloudRunV2Service.CloudRunV2ServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#create CloudRunV2Service#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#delete CloudRunV2Service#delete}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#update CloudRunV2Service#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#create CloudRunV2Service#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#delete CloudRunV2Service#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#update CloudRunV2Service#update}.

---

### CloudRunV2ServiceTraffic <a name="CloudRunV2ServiceTraffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTraffic: cloudRunV2Service.CloudRunV2ServiceTraffic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.percent">percent</a></code> | <code>number</code> | Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.revision">revision</a></code> | <code>string</code> | Revision to which to send this portion of traffic, if traffic allocation is by revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.tag">tag</a></code> | <code>string</code> | Indicates a string to be part of the URI to exclusively reference this target. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.type">type</a></code> | <code>string</code> | The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]. |

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#percent CloudRunV2Service#percent}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Revision to which to send this portion of traffic, if traffic allocation is by revision.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#revision CloudRunV2Service#revision}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Indicates a string to be part of the URI to exclusively reference this target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#tag CloudRunV2Service#tag}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#type CloudRunV2Service#type}

---

### CloudRunV2ServiceTrafficStatuses <a name="CloudRunV2ServiceTrafficStatuses" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

const cloudRunV2ServiceTrafficStatuses: cloudRunV2Service.CloudRunV2ServiceTrafficStatuses = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2ServiceBinaryAuthorizationOutputReference <a name="CloudRunV2ServiceBinaryAuthorizationOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification">resetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault">resetUseDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBreakglassJustification` <a name="resetBreakglassJustification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```typescript
public resetBreakglassJustification(): void
```

##### `resetUseDefault` <a name="resetUseDefault" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault"></a>

```typescript
public resetUseDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput">breakglassJustificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput">useDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification">breakglassJustification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault">useDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `breakglassJustificationInput`<sup>Optional</sup> <a name="breakglassJustificationInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```typescript
public readonly breakglassJustificationInput: string;
```

- *Type:* string

---

##### `useDefaultInput`<sup>Optional</sup> <a name="useDefaultInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```typescript
public readonly useDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `breakglassJustification`<sup>Required</sup> <a name="breakglassJustification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```typescript
public readonly breakglassJustification: string;
```

- *Type:* string

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault"></a>

```typescript
public readonly useDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

---


### CloudRunV2ServiceConditionsList <a name="CloudRunV2ServiceConditionsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2ServiceConditionsOutputReference <a name="CloudRunV2ServiceConditionsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.executionReason">executionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.revisionReason">revisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions">CloudRunV2ServiceConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.executionReason"></a>

```typescript
public readonly executionReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.revisionReason"></a>

```typescript
public readonly revisionReason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceConditions;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions">CloudRunV2ServiceConditions</a>

---


### CloudRunV2ServiceTemplateContainersEnvList <a name="CloudRunV2ServiceTemplateContainersEnvList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>[]

---


### CloudRunV2ServiceTemplateContainersEnvOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource">putValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueSource` <a name="putValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource"></a>

```typescript
public putValueSource(value: CloudRunV2ServiceTemplateContainersEnvValueSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueSource` <a name="resetValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource"></a>

```typescript
public resetValueSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```typescript
public readonly valueSourceInput: CloudRunV2ServiceTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersEnv | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```typescript
public putSecretKeyRef(value: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```typescript
public resetSecretKeyRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```typescript
public readonly secretKeyRefInput: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

---


### CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### CloudRunV2ServiceTemplateContainersList <a name="CloudRunV2ServiceTemplateContainersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>[]

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---


### CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket"></a>

```typescript
public putTcpSocket(value: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket"></a>

```typescript
public resetTcpSocket(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput"></a>

```typescript
public readonly tcpSocketInput: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

---


### CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---


### CloudRunV2ServiceTemplateContainersOutputReference <a name="CloudRunV2ServiceTemplateContainersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | CloudRunV2ServiceTemplateContainersEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>[]

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe"></a>

```typescript
public putLivenessProbe(value: CloudRunV2ServiceTemplateContainersLivenessProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | CloudRunV2ServiceTemplateContainersPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>[]

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources"></a>

```typescript
public putResources(value: CloudRunV2ServiceTemplateContainersResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe"></a>

```typescript
public putStartupProbe(value: CloudRunV2ServiceTemplateContainersStartupProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | CloudRunV2ServiceTemplateContainersVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe"></a>

```typescript
public resetLivenessProbe(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe"></a>

```typescript
public resetStartupProbe(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir"></a>

```typescript
public resetWorkingDir(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList">CloudRunV2ServiceTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList">CloudRunV2ServiceTemplateContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference">CloudRunV2ServiceTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList">CloudRunV2ServiceTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.env"></a>

```typescript
public readonly env: CloudRunV2ServiceTemplateContainersEnvList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList">CloudRunV2ServiceTemplateContainersEnvList</a>

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.ports"></a>

```typescript
public readonly ports: CloudRunV2ServiceTemplateContainersPortsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList">CloudRunV2ServiceTemplateContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: CloudRunV2ServiceTemplateContainersResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference">CloudRunV2ServiceTemplateContainersResourcesOutputReference</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe"></a>

```typescript
public readonly startupProbe: CloudRunV2ServiceTemplateContainersStartupProbeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: CloudRunV2ServiceTemplateContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList">CloudRunV2ServiceTemplateContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | CloudRunV2ServiceTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv">CloudRunV2ServiceTemplateContainersEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput"></a>

```typescript
public readonly livenessProbeInput: CloudRunV2ServiceTemplateContainersLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | CloudRunV2ServiceTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: CloudRunV2ServiceTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput"></a>

```typescript
public readonly startupProbeInput: CloudRunV2ServiceTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | CloudRunV2ServiceTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>[]

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput"></a>

```typescript
public readonly workingDirInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTemplateContainersPortsList <a name="CloudRunV2ServiceTemplateContainersPortsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTemplateContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a>[]

---


### CloudRunV2ServiceTemplateContainersPortsOutputReference <a name="CloudRunV2ServiceTemplateContainersPortsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersPorts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts">CloudRunV2ServiceTemplateContainersPorts</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTemplateContainersResourcesOutputReference <a name="CloudRunV2ServiceTemplateContainersResourcesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle">resetCpuIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuIdle` <a name="resetCpuIdle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle"></a>

```typescript
public resetCpuIdle(): void
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput">cpuIdleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle">cpuIdle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuIdleInput`<sup>Optional</sup> <a name="cpuIdleInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput"></a>

```typescript
public readonly cpuIdleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cpuIdle`<sup>Required</sup> <a name="cpuIdle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle"></a>

```typescript
public readonly cpuIdle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket"></a>

```typescript
public putTcpSocket(value: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket"></a>

```typescript
public resetTcpSocket(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```typescript
public readonly tcpSocketInput: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---


### CloudRunV2ServiceTemplateContainersVolumeMountsList <a name="CloudRunV2ServiceTemplateContainersVolumeMountsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a>[]

---


### CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference <a name="CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateContainersVolumeMounts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts">CloudRunV2ServiceTemplateContainersVolumeMounts</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTemplateOutputReference <a name="CloudRunV2ServiceTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling">putScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess">putVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment">resetExecutionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency">resetMaxInstanceRequestConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetScaling">resetScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVpcAccess">resetVpcAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers"></a>

```typescript
public putContainers(value: IResolvable | CloudRunV2ServiceTemplateContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>[]

---

##### `putScaling` <a name="putScaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling"></a>

```typescript
public putScaling(value: CloudRunV2ServiceTemplateScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | CloudRunV2ServiceTemplateVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>[]

---

##### `putVpcAccess` <a name="putVpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess"></a>

```typescript
public putVpcAccess(value: CloudRunV2ServiceTemplateVpcAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetContainers` <a name="resetContainers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetContainers"></a>

```typescript
public resetContainers(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetExecutionEnvironment` <a name="resetExecutionEnvironment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment"></a>

```typescript
public resetExecutionEnvironment(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaxInstanceRequestConcurrency` <a name="resetMaxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency"></a>

```typescript
public resetMaxInstanceRequestConcurrency(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```

##### `resetScaling` <a name="resetScaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetScaling"></a>

```typescript
public resetScaling(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

##### `resetVpcAccess` <a name="resetVpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVpcAccess"></a>

```typescript
public resetVpcAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList">CloudRunV2ServiceTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference">CloudRunV2ServiceTemplateScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList">CloudRunV2ServiceTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference">CloudRunV2ServiceTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containersInput">containersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput">executionEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput">maxInstanceRequestConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scalingInput">scalingInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput">vpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironment">executionEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containers"></a>

```typescript
public readonly containers: CloudRunV2ServiceTemplateContainersList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList">CloudRunV2ServiceTemplateContainersList</a>

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scaling"></a>

```typescript
public readonly scaling: CloudRunV2ServiceTemplateScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference">CloudRunV2ServiceTemplateScalingOutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumes"></a>

```typescript
public readonly volumes: CloudRunV2ServiceTemplateVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList">CloudRunV2ServiceTemplateVolumesList</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: CloudRunV2ServiceTemplateVpcAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference">CloudRunV2ServiceTemplateVpcAccessOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | CloudRunV2ServiceTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers">CloudRunV2ServiceTemplateContainers</a>[]

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `executionEnvironmentInput`<sup>Optional</sup> <a name="executionEnvironmentInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput"></a>

```typescript
public readonly executionEnvironmentInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxInstanceRequestConcurrencyInput`<sup>Optional</sup> <a name="maxInstanceRequestConcurrencyInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```typescript
public readonly maxInstanceRequestConcurrencyInput: number;
```

- *Type:* number

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `scalingInput`<sup>Optional</sup> <a name="scalingInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scalingInput"></a>

```typescript
public readonly scalingInput: CloudRunV2ServiceTemplateScaling;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | CloudRunV2ServiceTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>[]

---

##### `vpcAccessInput`<sup>Optional</sup> <a name="vpcAccessInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput"></a>

```typescript
public readonly vpcAccessInput: CloudRunV2ServiceTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `executionEnvironment`<sup>Required</sup> <a name="executionEnvironment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironment"></a>

```typescript
public readonly executionEnvironment: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxInstanceRequestConcurrency`<sup>Required</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency"></a>

```typescript
public readonly maxInstanceRequestConcurrency: number;
```

- *Type:* number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

---


### CloudRunV2ServiceTemplateScalingOutputReference <a name="CloudRunV2ServiceTemplateScalingOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount"></a>

```typescript
public resetMaxInstanceCount(): void
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount"></a>

```typescript
public resetMinInstanceCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateScaling;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

---


### CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference <a name="CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">resetInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```typescript
public resetInstances(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">instancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: string[];
```

- *Type:* string[]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---


### CloudRunV2ServiceTemplateVolumesList <a name="CloudRunV2ServiceTemplateVolumesList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a>[]

---


### CloudRunV2ServiceTemplateVolumesOutputReference <a name="CloudRunV2ServiceTemplateVolumesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance">putCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance">resetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudSqlInstance` <a name="putCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```typescript
public putCloudSqlInstance(value: CloudRunV2ServiceTemplateVolumesCloudSqlInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret"></a>

```typescript
public putSecret(value: CloudRunV2ServiceTemplateVolumesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `resetCloudSqlInstance` <a name="resetCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```typescript
public resetCloudSqlInstance(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference">CloudRunV2ServiceTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput">cloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: CloudRunV2ServiceTemplateVolumesSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference">CloudRunV2ServiceTemplateVolumesSecretOutputReference</a>

---

##### `cloudSqlInstanceInput`<sup>Optional</sup> <a name="cloudSqlInstanceInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```typescript
public readonly cloudSqlInstanceInput: CloudRunV2ServiceTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: CloudRunV2ServiceTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateVolumes | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes">CloudRunV2ServiceTemplateVolumes</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTemplateVolumesSecretItemsList <a name="CloudRunV2ServiceTemplateVolumesSecretItemsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>[]

---


### CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference <a name="CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput">modeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateVolumesSecretItems | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTemplateVolumesSecretOutputReference <a name="CloudRunV2ServiceTemplateVolumesSecretOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode">resetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | CloudRunV2ServiceTemplateVolumesSecretItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>[]

---

##### `resetDefaultMode` <a name="resetDefaultMode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```typescript
public resetDefaultMode(): void
```

##### `resetItems` <a name="resetItems" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList">CloudRunV2ServiceTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput">defaultModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items"></a>

```typescript
public readonly items: CloudRunV2ServiceTemplateVolumesSecretItemsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList">CloudRunV2ServiceTemplateVolumesSecretItemsList</a>

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```typescript
public readonly defaultModeInput: number;
```

- *Type:* number

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | CloudRunV2ServiceTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems">CloudRunV2ServiceTemplateVolumesSecretItems</a>[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

---


### CloudRunV2ServiceTemplateVpcAccessOutputReference <a name="CloudRunV2ServiceTemplateVpcAccessOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector">resetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress">resetEgress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnector` <a name="resetConnector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector"></a>

```typescript
public resetConnector(): void
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress"></a>

```typescript
public resetEgress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput">connectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput">egressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector">connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorInput`<sup>Optional</sup> <a name="connectorInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput"></a>

```typescript
public readonly connectorInput: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput"></a>

```typescript
public readonly egressInput: string;
```

- *Type:* string

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress"></a>

```typescript
public readonly egress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

---


### CloudRunV2ServiceTerminalConditionList <a name="CloudRunV2ServiceTerminalConditionList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTerminalConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2ServiceTerminalConditionOutputReference <a name="CloudRunV2ServiceTerminalConditionOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.executionReason">executionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason">revisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition">CloudRunV2ServiceTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.executionReason"></a>

```typescript
public readonly executionReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason"></a>

```typescript
public readonly revisionReason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTerminalCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition">CloudRunV2ServiceTerminalCondition</a>

---


### CloudRunV2ServiceTimeoutsOutputReference <a name="CloudRunV2ServiceTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTrafficList <a name="CloudRunV2ServiceTrafficList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTrafficList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2ServiceTraffic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a>[]

---


### CloudRunV2ServiceTrafficOutputReference <a name="CloudRunV2ServiceTrafficOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetPercent">resetPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetPercent"></a>

```typescript
public resetPercent(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTraffic | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic">CloudRunV2ServiceTraffic</a> | cdktf.IResolvable

---


### CloudRunV2ServiceTrafficStatusesList <a name="CloudRunV2ServiceTrafficStatusesList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get"></a>

```typescript
public get(index: number): CloudRunV2ServiceTrafficStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2ServiceTrafficStatusesOutputReference <a name="CloudRunV2ServiceTrafficStatusesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Service } from '@cdktf/provider-google'

new cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses">CloudRunV2ServiceTrafficStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2ServiceTrafficStatuses;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses">CloudRunV2ServiceTrafficStatuses</a>

---



