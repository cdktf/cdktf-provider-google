# `beyondcorpSecurityGateway` Submodule <a name="`beyondcorpSecurityGateway` Submodule" id="@cdktf/provider-google.beyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGateway <a name="BeyondcorpSecurityGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

new beyondcorpSecurityGateway.BeyondcorpSecurityGateway(scope: Construct, id: string, config: BeyondcorpSecurityGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig">BeyondcorpSecurityGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig">BeyondcorpSecurityGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs">putHubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetHubs">resetHubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHubs` <a name="putHubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs"></a>

```typescript
public putHubs(value: IResolvable | BeyondcorpSecurityGatewayHubs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putHubs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: BeyondcorpSecurityGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetHubs` <a name="resetHubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetHubs"></a>

```typescript
public resetHubs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BeyondcorpSecurityGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.delegatingServiceAccount">delegatingServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.externalIps">externalIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubs">hubs</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList">BeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference">BeyondcorpSecurityGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubsInput">hubsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayId">securityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `delegatingServiceAccount`<sup>Required</sup> <a name="delegatingServiceAccount" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.delegatingServiceAccount"></a>

```typescript
public readonly delegatingServiceAccount: string;
```

- *Type:* string

---

##### `externalIps`<sup>Required</sup> <a name="externalIps" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.externalIps"></a>

```typescript
public readonly externalIps: string[];
```

- *Type:* string[]

---

##### `hubs`<sup>Required</sup> <a name="hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubs"></a>

```typescript
public readonly hubs: BeyondcorpSecurityGatewayHubsList;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList">BeyondcorpSecurityGatewayHubsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeouts"></a>

```typescript
public readonly timeouts: BeyondcorpSecurityGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference">BeyondcorpSecurityGatewayTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `hubsInput`<sup>Optional</sup> <a name="hubsInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.hubsInput"></a>

```typescript
public readonly hubsInput: IResolvable | BeyondcorpSecurityGatewayHubs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```typescript
public readonly securityGatewayIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BeyondcorpSecurityGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.securityGatewayId"></a>

```typescript
public readonly securityGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayConfig <a name="BeyondcorpSecurityGatewayConfig" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

const beyondcorpSecurityGatewayConfig: beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.hubs">hubs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>[]</code> | hubs block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```typescript
public readonly securityGatewayId: string;
```

- *Type:* string

Optional.

User-settable SecurityGateway resource ID.
* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#security_gateway_id BeyondcorpSecurityGateway#security_gateway_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#display_name BeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.hubs"></a>

```typescript
public readonly hubs: IResolvable | BeyondcorpSecurityGatewayHubs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>[]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#hubs BeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#id BeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#location BeyondcorpSecurityGateway#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#project BeyondcorpSecurityGateway#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BeyondcorpSecurityGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#timeouts BeyondcorpSecurityGateway#timeouts}

---

### BeyondcorpSecurityGatewayHubs <a name="BeyondcorpSecurityGatewayHubs" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

const beyondcorpSecurityGatewayHubs: beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.internetGateway">internetGateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | internet_gateway block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#region BeyondcorpSecurityGateway#region}.

---

##### `internetGateway`<sup>Optional</sup> <a name="internetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs.property.internetGateway"></a>

```typescript
public readonly internetGateway: BeyondcorpSecurityGatewayHubsInternetGateway;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

internet_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#internet_gateway BeyondcorpSecurityGateway#internet_gateway}

---

### BeyondcorpSecurityGatewayHubsInternetGateway <a name="BeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

const beyondcorpSecurityGatewayHubsInternetGateway: beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway = { ... }
```


### BeyondcorpSecurityGatewayTimeouts <a name="BeyondcorpSecurityGatewayTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

const beyondcorpSecurityGatewayTimeouts: beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#create BeyondcorpSecurityGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#delete BeyondcorpSecurityGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/beyondcorp_security_gateway#update BeyondcorpSecurityGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

new beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">assignedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignedIps`<sup>Required</sup> <a name="assignedIps" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```typescript
public readonly assignedIps: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BeyondcorpSecurityGatewayHubsInternetGateway;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### BeyondcorpSecurityGatewayHubsList <a name="BeyondcorpSecurityGatewayHubsList" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

new beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get"></a>

```typescript
public get(index: number): BeyondcorpSecurityGatewayHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BeyondcorpSecurityGatewayHubs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>[]

---


### BeyondcorpSecurityGatewayHubsOutputReference <a name="BeyondcorpSecurityGatewayHubsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

new beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway">putInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway">resetInternetGateway</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternetGateway` <a name="putInternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway"></a>

```typescript
public putInternetGateway(value: BeyondcorpSecurityGatewayHubsInternetGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `resetInternetGateway` <a name="resetInternetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway"></a>

```typescript
public resetInternetGateway(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">internetGateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput">internetGatewayInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internetGateway`<sup>Required</sup> <a name="internetGateway" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```typescript
public readonly internetGateway: BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">BeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a>

---

##### `internetGatewayInput`<sup>Optional</sup> <a name="internetGatewayInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput"></a>

```typescript
public readonly internetGatewayInput: BeyondcorpSecurityGatewayHubsInternetGateway;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsInternetGateway">BeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BeyondcorpSecurityGatewayHubs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayHubs">BeyondcorpSecurityGatewayHubs</a>

---


### BeyondcorpSecurityGatewayTimeoutsOutputReference <a name="BeyondcorpSecurityGatewayTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { beyondcorpSecurityGateway } from '@cdktf/provider-google'

new beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BeyondcorpSecurityGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpSecurityGateway.BeyondcorpSecurityGatewayTimeouts">BeyondcorpSecurityGatewayTimeouts</a>

---



