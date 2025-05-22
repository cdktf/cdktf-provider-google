# `networkServicesGateway` Submodule <a name="`networkServicesGateway` Submodule" id="@cdktf/provider-google.networkServicesGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesGateway <a name="NetworkServicesGateway" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway google_network_services_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer"></a>

```typescript
import { networkServicesGateway } from '@cdktf/provider-google'

new networkServicesGateway.NetworkServicesGateway(scope: Construct, id: string, config: NetworkServicesGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig">NetworkServicesGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig">NetworkServicesGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetAddresses">resetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetCertificateUrls">resetCertificateUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy">resetDeleteSwgAutogenRouterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetEnvoyHeaders">resetEnvoyHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetGatewaySecurityPolicy">resetGatewaySecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetRoutingMode">resetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetServerTlsPolicy">resetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

---

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetAddresses"></a>

```typescript
public resetAddresses(): void
```

##### `resetCertificateUrls` <a name="resetCertificateUrls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetCertificateUrls"></a>

```typescript
public resetCertificateUrls(): void
```

##### `resetDeleteSwgAutogenRouterOnDestroy` <a name="resetDeleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy"></a>

```typescript
public resetDeleteSwgAutogenRouterOnDestroy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvoyHeaders` <a name="resetEnvoyHeaders" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetEnvoyHeaders"></a>

```typescript
public resetEnvoyHeaders(): void
```

##### `resetGatewaySecurityPolicy` <a name="resetGatewaySecurityPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetGatewaySecurityPolicy"></a>

```typescript
public resetGatewaySecurityPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRoutingMode` <a name="resetRoutingMode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetRoutingMode"></a>

```typescript
public resetRoutingMode(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetServerTlsPolicy` <a name="resetServerTlsPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetServerTlsPolicy"></a>

```typescript
public resetServerTlsPolicy(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isConstruct"></a>

```typescript
import { networkServicesGateway } from '@cdktf/provider-google'

networkServicesGateway.NetworkServicesGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement"></a>

```typescript
import { networkServicesGateway } from '@cdktf/provider-google'

networkServicesGateway.NetworkServicesGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource"></a>

```typescript
import { networkServicesGateway } from '@cdktf/provider-google'

networkServicesGateway.NetworkServicesGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport"></a>

```typescript
import { networkServicesGateway } from '@cdktf/provider-google'

networkServicesGateway.NetworkServicesGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkServicesGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference">NetworkServicesGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addressesInput">addressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrlsInput">certificateUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput">deleteSwgAutogenRouterOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeadersInput">envoyHeadersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicyInput">gatewaySecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.portsInput">portsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingModeInput">routingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicyInput">serverTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrls">certificateUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy">deleteSwgAutogenRouterOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeaders">envoyHeaders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingMode">routingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference">NetworkServicesGatewayTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addressesInput"></a>

```typescript
public readonly addressesInput: string[];
```

- *Type:* string[]

---

##### `certificateUrlsInput`<sup>Optional</sup> <a name="certificateUrlsInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrlsInput"></a>

```typescript
public readonly certificateUrlsInput: string[];
```

- *Type:* string[]

---

##### `deleteSwgAutogenRouterOnDestroyInput`<sup>Optional</sup> <a name="deleteSwgAutogenRouterOnDestroyInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput"></a>

```typescript
public readonly deleteSwgAutogenRouterOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `envoyHeadersInput`<sup>Optional</sup> <a name="envoyHeadersInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeadersInput"></a>

```typescript
public readonly envoyHeadersInput: string;
```

- *Type:* string

---

##### `gatewaySecurityPolicyInput`<sup>Optional</sup> <a name="gatewaySecurityPolicyInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicyInput"></a>

```typescript
public readonly gatewaySecurityPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.portsInput"></a>

```typescript
public readonly portsInput: number[];
```

- *Type:* number[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `routingModeInput`<sup>Optional</sup> <a name="routingModeInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingModeInput"></a>

```typescript
public readonly routingModeInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `serverTlsPolicyInput`<sup>Optional</sup> <a name="serverTlsPolicyInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicyInput"></a>

```typescript
public readonly serverTlsPolicyInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `certificateUrls`<sup>Required</sup> <a name="certificateUrls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrls"></a>

```typescript
public readonly certificateUrls: string[];
```

- *Type:* string[]

---

##### `deleteSwgAutogenRouterOnDestroy`<sup>Required</sup> <a name="deleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy"></a>

```typescript
public readonly deleteSwgAutogenRouterOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `envoyHeaders`<sup>Required</sup> <a name="envoyHeaders" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeaders"></a>

```typescript
public readonly envoyHeaders: string;
```

- *Type:* string

---

##### `gatewaySecurityPolicy`<sup>Required</sup> <a name="gatewaySecurityPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicy"></a>

```typescript
public readonly gatewaySecurityPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `routingMode`<sup>Required</sup> <a name="routingMode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingMode"></a>

```typescript
public readonly routingMode: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `serverTlsPolicy`<sup>Required</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicy"></a>

```typescript
public readonly serverTlsPolicy: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesGatewayConfig <a name="NetworkServicesGatewayConfig" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.Initializer"></a>

```typescript
import { networkServicesGateway } from '@cdktf/provider-google'

const networkServicesGatewayConfig: networkServicesGateway.NetworkServicesGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.name">name</a></code> | <code>string</code> | Name of the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ports">ports</a></code> | <code>number[]</code> | One or more port numbers (1-65535), on which the Gateway will receive traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.type">type</a></code> | <code>string</code> | Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.addresses">addresses</a></code> | <code>string[]</code> | Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.certificateUrls">certificateUrls</a></code> | <code>string[]</code> | A fully-qualified Certificates URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy">deleteSwgAutogenRouterOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.envoyHeaders">envoyHeaders</a></code> | <code>string</code> | Determines if envoy will insert internal debug headers into upstream requests. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>string</code> | A fully-qualified GatewaySecurityPolicy URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#id NetworkServicesGateway#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.location">location</a></code> | <code>string</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.network">network</a></code> | <code>string</code> | The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#project NetworkServicesGateway#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.routingMode">routingMode</a></code> | <code>string</code> | The routing mode of the Gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.scope">scope</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>string</code> | A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#name NetworkServicesGateway#name}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

One or more port numbers (1-65535), on which the Gateway will receive traffic.

The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port.
 Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#ports NetworkServicesGateway#ports}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#type NetworkServicesGateway#type}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic.

When no address is provided, an IP from the subnetwork is allocated.

This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#addresses NetworkServicesGateway#addresses}

---

##### `certificateUrls`<sup>Optional</sup> <a name="certificateUrls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.certificateUrls"></a>

```typescript
public readonly certificateUrls: string[];
```

- *Type:* string[]

A fully-qualified Certificates URL reference.

The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#certificate_urls NetworkServicesGateway#certificate_urls}

---

##### `deleteSwgAutogenRouterOnDestroy`<sup>Optional</sup> <a name="deleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy"></a>

```typescript
public readonly deleteSwgAutogenRouterOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.

If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#delete_swg_autogen_router_on_destroy NetworkServicesGateway#delete_swg_autogen_router_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#description NetworkServicesGateway#description}

---

##### `envoyHeaders`<sup>Optional</sup> <a name="envoyHeaders" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.envoyHeaders"></a>

```typescript
public readonly envoyHeaders: string;
```

- *Type:* string

Determines if envoy will insert internal debug headers into upstream requests.

Other Envoy headers may still be injected.
By default, envoy will not insert any debug headers. Possible values: ["NONE", "DEBUG_HEADERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#envoy_headers NetworkServicesGateway#envoy_headers}

---

##### `gatewaySecurityPolicy`<sup>Optional</sup> <a name="gatewaySecurityPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.gatewaySecurityPolicy"></a>

```typescript
public readonly gatewaySecurityPolicy: string;
```

- *Type:* string

A fully-qualified GatewaySecurityPolicy URL reference.

Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#gateway_security_policy NetworkServicesGateway#gateway_security_policy}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#id NetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#ip_version NetworkServicesGateway#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the Gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#labels NetworkServicesGateway#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#location NetworkServicesGateway#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#network NetworkServicesGateway#network}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#project NetworkServicesGateway#project}.

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.routingMode"></a>

```typescript
public readonly routingMode: string;
```

- *Type:* string

The routing mode of the Gateway.

This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#routing_mode NetworkServicesGateway#routing_mode}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Immutable.

Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer.

Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#scope NetworkServicesGateway#scope}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.serverTlsPolicy"></a>

```typescript
public readonly serverTlsPolicy: string;
```

- *Type:* string

A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#server_tls_policy NetworkServicesGateway#server_tls_policy}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#subnetwork NetworkServicesGateway#subnetwork}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#timeouts NetworkServicesGateway#timeouts}

---

### NetworkServicesGatewayTimeouts <a name="NetworkServicesGatewayTimeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.Initializer"></a>

```typescript
import { networkServicesGateway } from '@cdktf/provider-google'

const networkServicesGatewayTimeouts: networkServicesGateway.NetworkServicesGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#create NetworkServicesGateway#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#delete NetworkServicesGateway#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#update NetworkServicesGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#create NetworkServicesGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#delete NetworkServicesGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_services_gateway#update NetworkServicesGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesGatewayTimeoutsOutputReference <a name="NetworkServicesGatewayTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesGateway } from '@cdktf/provider-google'

new networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

---



