# `networkSecurityServerTlsPolicy` Submodule <a name="`networkSecurityServerTlsPolicy` Submodule" id="@cdktf/provider-google.networkSecurityServerTlsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityServerTlsPolicy <a name="NetworkSecurityServerTlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy google_network_security_server_tls_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy(scope: Construct, id: string, config: NetworkSecurityServerTlsPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig">NetworkSecurityServerTlsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig">NetworkSecurityServerTlsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putMtlsPolicy">putMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putServerCertificate">putServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetAllowOpen">resetAllowOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetMtlsPolicy">resetMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetServerCertificate">resetServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMtlsPolicy` <a name="putMtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putMtlsPolicy"></a>

```typescript
public putMtlsPolicy(value: NetworkSecurityServerTlsPolicyMtlsPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putMtlsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a>

---

##### `putServerCertificate` <a name="putServerCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putServerCertificate"></a>

```typescript
public putServerCertificate(value: NetworkSecurityServerTlsPolicyServerCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putServerCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityServerTlsPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a>

---

##### `resetAllowOpen` <a name="resetAllowOpen" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetAllowOpen"></a>

```typescript
public resetAllowOpen(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMtlsPolicy` <a name="resetMtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetMtlsPolicy"></a>

```typescript
public resetMtlsPolicy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServerCertificate` <a name="resetServerCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetServerCertificate"></a>

```typescript
public resetServerCertificate(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isConstruct"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformElement"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformResource"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityServerTlsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityServerTlsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityServerTlsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.mtlsPolicy">mtlsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.serverCertificate">serverCertificate</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference">NetworkSecurityServerTlsPolicyServerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference">NetworkSecurityServerTlsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.allowOpenInput">allowOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.mtlsPolicyInput">mtlsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.serverCertificateInput">serverCertificateInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.allowOpen">allowOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `mtlsPolicy`<sup>Required</sup> <a name="mtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.mtlsPolicy"></a>

```typescript
public readonly mtlsPolicy: NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference</a>

---

##### `serverCertificate`<sup>Required</sup> <a name="serverCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.serverCertificate"></a>

```typescript
public readonly serverCertificate: NetworkSecurityServerTlsPolicyServerCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference">NetworkSecurityServerTlsPolicyServerCertificateOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityServerTlsPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference">NetworkSecurityServerTlsPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `allowOpenInput`<sup>Optional</sup> <a name="allowOpenInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.allowOpenInput"></a>

```typescript
public readonly allowOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mtlsPolicyInput`<sup>Optional</sup> <a name="mtlsPolicyInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.mtlsPolicyInput"></a>

```typescript
public readonly mtlsPolicyInput: NetworkSecurityServerTlsPolicyMtlsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serverCertificateInput`<sup>Optional</sup> <a name="serverCertificateInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.serverCertificateInput"></a>

```typescript
public readonly serverCertificateInput: NetworkSecurityServerTlsPolicyServerCertificate;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityServerTlsPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a>

---

##### `allowOpen`<sup>Required</sup> <a name="allowOpen" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.allowOpen"></a>

```typescript
public readonly allowOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityServerTlsPolicyConfig <a name="NetworkSecurityServerTlsPolicyConfig" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyConfig: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.allowOpen">allowOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field applies only for Traffic Director policies. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#id NetworkSecurityServerTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.location">location</a></code> | <code>string</code> | The location of the server tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.mtlsPolicy">mtlsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | mtls_policy block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#project NetworkSecurityServerTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.serverCertificate">serverCertificate</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a></code> | server_certificate block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the ServerTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#name NetworkSecurityServerTlsPolicy#name}

---

##### `allowOpen`<sup>Optional</sup> <a name="allowOpen" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.allowOpen"></a>

```typescript
public readonly allowOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field applies only for Traffic Director policies.

It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#allow_open NetworkSecurityServerTlsPolicy#allow_open}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#description NetworkSecurityServerTlsPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#id NetworkSecurityServerTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the ServerTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#labels NetworkSecurityServerTlsPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the server tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#location NetworkSecurityServerTlsPolicy#location}

---

##### `mtlsPolicy`<sup>Optional</sup> <a name="mtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.mtlsPolicy"></a>

```typescript
public readonly mtlsPolicy: NetworkSecurityServerTlsPolicyMtlsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a>

mtls_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#mtls_policy NetworkSecurityServerTlsPolicy#mtls_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#project NetworkSecurityServerTlsPolicy#project}.

---

##### `serverCertificate`<sup>Optional</sup> <a name="serverCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.serverCertificate"></a>

```typescript
public readonly serverCertificate: NetworkSecurityServerTlsPolicyServerCertificate;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#server_certificate NetworkSecurityServerTlsPolicy#server_certificate}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityServerTlsPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#timeouts NetworkSecurityServerTlsPolicy#timeouts}

---

### NetworkSecurityServerTlsPolicyMtlsPolicy <a name="NetworkSecurityServerTlsPolicyMtlsPolicy" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyMtlsPolicy: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationCa">clientValidationCa</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>[]</code> | client_validation_ca block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationMode">clientValidationMode</a></code> | <code>string</code> | When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationTrustConfig">clientValidationTrustConfig</a></code> | <code>string</code> | Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers. |

---

##### `clientValidationCa`<sup>Optional</sup> <a name="clientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationCa"></a>

```typescript
public readonly clientValidationCa: IResolvable | NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>[]

client_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#client_validation_ca NetworkSecurityServerTlsPolicy#client_validation_ca}

---

##### `clientValidationMode`<sup>Optional</sup> <a name="clientValidationMode" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationMode"></a>

```typescript
public readonly clientValidationMode: string;
```

- *Type:* string

When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.

Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. Possible values: ["CLIENT_VALIDATION_MODE_UNSPECIFIED", "ALLOW_INVALID_OR_MISSING_CLIENT_CERT", "REJECT_INVALID"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#client_validation_mode NetworkSecurityServerTlsPolicy#client_validation_mode}

---

##### `clientValidationTrustConfig`<sup>Optional</sup> <a name="clientValidationTrustConfig" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationTrustConfig"></a>

```typescript
public readonly clientValidationTrustConfig: string;
```

- *Type:* string

Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#client_validation_trust_config NetworkSecurityServerTlsPolicy#client_validation_trust_config}

---

### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyMtlsPolicyClientValidationCa: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.certificateProviderInstance">certificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.grpcEndpoint">grpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `certificateProviderInstance`<sup>Optional</sup> <a name="certificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.certificateProviderInstance"></a>

```typescript
public readonly certificateProviderInstance: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#certificate_provider_instance NetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

##### `grpcEndpoint`<sup>Optional</sup> <a name="grpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.grpcEndpoint"></a>

```typescript
public readonly grpcEndpoint: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#grpc_endpoint NetworkSecurityServerTlsPolicy#grpc_endpoint}

---

### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.property.pluginInstance">pluginInstance</a></code> | <code>string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.property.pluginInstance"></a>

```typescript
public readonly pluginInstance: string;
```

- *Type:* string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#plugin_instance NetworkSecurityServerTlsPolicy#plugin_instance}

---

### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.property.targetUri">targetUri</a></code> | <code>string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.property.targetUri"></a>

```typescript
public readonly targetUri: string;
```

- *Type:* string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#target_uri NetworkSecurityServerTlsPolicy#target_uri}

---

### NetworkSecurityServerTlsPolicyServerCertificate <a name="NetworkSecurityServerTlsPolicyServerCertificate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyServerCertificate: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.property.certificateProviderInstance">certificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.property.grpcEndpoint">grpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `certificateProviderInstance`<sup>Optional</sup> <a name="certificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.property.certificateProviderInstance"></a>

```typescript
public readonly certificateProviderInstance: NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#certificate_provider_instance NetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

##### `grpcEndpoint`<sup>Optional</sup> <a name="grpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate.property.grpcEndpoint"></a>

```typescript
public readonly grpcEndpoint: NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#grpc_endpoint NetworkSecurityServerTlsPolicy#grpc_endpoint}

---

### NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance <a name="NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.property.pluginInstance">pluginInstance</a></code> | <code>string</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.property.pluginInstance"></a>

```typescript
public readonly pluginInstance: string;
```

- *Type:* string

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#plugin_instance NetworkSecurityServerTlsPolicy#plugin_instance}

---

### NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint <a name="NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyServerCertificateGrpcEndpoint: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.property.targetUri">targetUri</a></code> | <code>string</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.property.targetUri"></a>

```typescript
public readonly targetUri: string;
```

- *Type:* string

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#target_uri NetworkSecurityServerTlsPolicy#target_uri}

---

### NetworkSecurityServerTlsPolicyTimeouts <a name="NetworkSecurityServerTlsPolicyTimeouts" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

const networkSecurityServerTlsPolicyTimeouts: networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#create NetworkSecurityServerTlsPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#delete NetworkSecurityServerTlsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#update NetworkSecurityServerTlsPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#create NetworkSecurityServerTlsPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#delete NetworkSecurityServerTlsPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/network_security_server_tls_policy#update NetworkSecurityServerTlsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput">pluginInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance">pluginInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pluginInstanceInput`<sup>Optional</sup> <a name="pluginInstanceInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```typescript
public readonly pluginInstanceInput: string;
```

- *Type:* string

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```typescript
public readonly pluginInstance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---


### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUriInput">targetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUri">targetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUriInput"></a>

```typescript
public readonly targetUriInput: string;
```

- *Type:* string

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUri"></a>

```typescript
public readonly targetUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---


### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get"></a>

```typescript
public get(index: number): NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>[]

---


### NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference <a name="NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance">putCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint">putGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetCertificateProviderInstance">resetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetGrpcEndpoint">resetGrpcEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateProviderInstance` <a name="putCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance"></a>

```typescript
public putCertificateProviderInstance(value: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---

##### `putGrpcEndpoint` <a name="putGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint"></a>

```typescript
public putGrpcEndpoint(value: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---

##### `resetCertificateProviderInstance` <a name="resetCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetCertificateProviderInstance"></a>

```typescript
public resetCertificateProviderInstance(): void
```

##### `resetGrpcEndpoint` <a name="resetGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetGrpcEndpoint"></a>

```typescript
public resetGrpcEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstance">certificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpoint">grpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstanceInput">certificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpointInput">grpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateProviderInstance`<sup>Required</sup> <a name="certificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstance"></a>

```typescript
public readonly certificateProviderInstance: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference</a>

---

##### `grpcEndpoint`<sup>Required</sup> <a name="grpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpoint"></a>

```typescript
public readonly grpcEndpoint: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference</a>

---

##### `certificateProviderInstanceInput`<sup>Optional</sup> <a name="certificateProviderInstanceInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstanceInput"></a>

```typescript
public readonly certificateProviderInstanceInput: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---

##### `grpcEndpointInput`<sup>Optional</sup> <a name="grpcEndpointInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpointInput"></a>

```typescript
public readonly grpcEndpointInput: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>

---


### NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference <a name="NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa">putClientValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationCa">resetClientValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationMode">resetClientValidationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationTrustConfig">resetClientValidationTrustConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientValidationCa` <a name="putClientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa"></a>

```typescript
public putClientValidationCa(value: IResolvable | NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>[]

---

##### `resetClientValidationCa` <a name="resetClientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationCa"></a>

```typescript
public resetClientValidationCa(): void
```

##### `resetClientValidationMode` <a name="resetClientValidationMode" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationMode"></a>

```typescript
public resetClientValidationMode(): void
```

##### `resetClientValidationTrustConfig` <a name="resetClientValidationTrustConfig" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationTrustConfig"></a>

```typescript
public resetClientValidationTrustConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCa">clientValidationCa</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCaInput">clientValidationCaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationModeInput">clientValidationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfigInput">clientValidationTrustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationMode">clientValidationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfig">clientValidationTrustConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientValidationCa`<sup>Required</sup> <a name="clientValidationCa" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCa"></a>

```typescript
public readonly clientValidationCa: NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList</a>

---

##### `clientValidationCaInput`<sup>Optional</sup> <a name="clientValidationCaInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCaInput"></a>

```typescript
public readonly clientValidationCaInput: IResolvable | NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">NetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>[]

---

##### `clientValidationModeInput`<sup>Optional</sup> <a name="clientValidationModeInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationModeInput"></a>

```typescript
public readonly clientValidationModeInput: string;
```

- *Type:* string

---

##### `clientValidationTrustConfigInput`<sup>Optional</sup> <a name="clientValidationTrustConfigInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfigInput"></a>

```typescript
public readonly clientValidationTrustConfigInput: string;
```

- *Type:* string

---

##### `clientValidationMode`<sup>Required</sup> <a name="clientValidationMode" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationMode"></a>

```typescript
public readonly clientValidationMode: string;
```

- *Type:* string

---

##### `clientValidationTrustConfig`<sup>Required</sup> <a name="clientValidationTrustConfig" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfig"></a>

```typescript
public readonly clientValidationTrustConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityServerTlsPolicyMtlsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyMtlsPolicy">NetworkSecurityServerTlsPolicyMtlsPolicy</a>

---


### NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference <a name="NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput">pluginInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstance">pluginInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pluginInstanceInput`<sup>Optional</sup> <a name="pluginInstanceInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```typescript
public readonly pluginInstanceInput: string;
```

- *Type:* string

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```typescript
public readonly pluginInstance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---


### NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference <a name="NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUriInput">targetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUri">targetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUriInput"></a>

```typescript
public readonly targetUriInput: string;
```

- *Type:* string

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUri"></a>

```typescript
public readonly targetUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---


### NetworkSecurityServerTlsPolicyServerCertificateOutputReference <a name="NetworkSecurityServerTlsPolicyServerCertificateOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance">putCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint">putGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetCertificateProviderInstance">resetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetGrpcEndpoint">resetGrpcEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateProviderInstance` <a name="putCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance"></a>

```typescript
public putCertificateProviderInstance(value: NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---

##### `putGrpcEndpoint` <a name="putGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint"></a>

```typescript
public putGrpcEndpoint(value: NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---

##### `resetCertificateProviderInstance` <a name="resetCertificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetCertificateProviderInstance"></a>

```typescript
public resetCertificateProviderInstance(): void
```

##### `resetGrpcEndpoint` <a name="resetGrpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetGrpcEndpoint"></a>

```typescript
public resetGrpcEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstance">certificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpoint">grpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstanceInput">certificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpointInput">grpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateProviderInstance`<sup>Required</sup> <a name="certificateProviderInstance" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstance"></a>

```typescript
public readonly certificateProviderInstance: NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference</a>

---

##### `grpcEndpoint`<sup>Required</sup> <a name="grpcEndpoint" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpoint"></a>

```typescript
public readonly grpcEndpoint: NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference</a>

---

##### `certificateProviderInstanceInput`<sup>Optional</sup> <a name="certificateProviderInstanceInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstanceInput"></a>

```typescript
public readonly certificateProviderInstanceInput: NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">NetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---

##### `grpcEndpointInput`<sup>Optional</sup> <a name="grpcEndpointInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpointInput"></a>

```typescript
public readonly grpcEndpointInput: NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">NetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityServerTlsPolicyServerCertificate;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyServerCertificate">NetworkSecurityServerTlsPolicyServerCertificate</a>

---


### NetworkSecurityServerTlsPolicyTimeoutsOutputReference <a name="NetworkSecurityServerTlsPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityServerTlsPolicy } from '@cdktf/provider-google'

new networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityServerTlsPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityServerTlsPolicy.NetworkSecurityServerTlsPolicyTimeouts">NetworkSecurityServerTlsPolicyTimeouts</a>

---



