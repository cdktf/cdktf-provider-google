# `beyondcorpAppConnection` Submodule <a name="`beyondcorpAppConnection` Submodule" id="@cdktf/provider-google.beyondcorpAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpAppConnection <a name="BeyondcorpAppConnection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection google_beyondcorp_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

new beyondcorpAppConnection.BeyondcorpAppConnection(scope: Construct, id: string, config: BeyondcorpAppConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig">BeyondcorpAppConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig">BeyondcorpAppConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint">putApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway">putGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetConnectors">resetConnectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationEndpoint` <a name="putApplicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint"></a>

```typescript
public putApplicationEndpoint(value: BeyondcorpAppConnectionApplicationEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

---

##### `putGateway` <a name="putGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway"></a>

```typescript
public putGateway(value: BeyondcorpAppConnectionGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: BeyondcorpAppConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>

---

##### `resetConnectors` <a name="resetConnectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetConnectors"></a>

```typescript
public resetConnectors(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGateway` <a name="resetGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetGateway"></a>

```typescript
public resetGateway(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpAppConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BeyondcorpAppConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BeyondcorpAppConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BeyondcorpAppConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpAppConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpoint">applicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference">BeyondcorpAppConnectionApplicationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference">BeyondcorpAppConnectionGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference">BeyondcorpAppConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpointInput">applicationEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectorsInput">connectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gatewayInput">gatewayInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectors">connectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationEndpoint`<sup>Required</sup> <a name="applicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpoint"></a>

```typescript
public readonly applicationEndpoint: BeyondcorpAppConnectionApplicationEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference">BeyondcorpAppConnectionApplicationEndpointOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gateway"></a>

```typescript
public readonly gateway: BeyondcorpAppConnectionGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference">BeyondcorpAppConnectionGatewayOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeouts"></a>

```typescript
public readonly timeouts: BeyondcorpAppConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference">BeyondcorpAppConnectionTimeoutsOutputReference</a>

---

##### `applicationEndpointInput`<sup>Optional</sup> <a name="applicationEndpointInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpointInput"></a>

```typescript
public readonly applicationEndpointInput: BeyondcorpAppConnectionApplicationEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

---

##### `connectorsInput`<sup>Optional</sup> <a name="connectorsInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectorsInput"></a>

```typescript
public readonly connectorsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: BeyondcorpAppConnectionGateway;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BeyondcorpAppConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `connectors`<sup>Required</sup> <a name="connectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectors"></a>

```typescript
public readonly connectors: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpAppConnectionApplicationEndpoint <a name="BeyondcorpAppConnectionApplicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.Initializer"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

const beyondcorpAppConnectionApplicationEndpoint: beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.host">host</a></code> | <code>string</code> | Hostname or IP address of the remote application endpoint. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.port">port</a></code> | <code>number</code> | Port of the remote application endpoint. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Hostname or IP address of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#host BeyondcorpAppConnection#host}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#port BeyondcorpAppConnection#port}

---

### BeyondcorpAppConnectionConfig <a name="BeyondcorpAppConnectionConfig" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.Initializer"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

const beyondcorpAppConnectionConfig: beyondcorpAppConnection.BeyondcorpAppConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.applicationEndpoint">applicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | application_endpoint block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.name">name</a></code> | <code>string</code> | ID of the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connectors">connectors</a></code> | <code>string[]</code> | List of AppConnectors that are authorised to be associated with this AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.displayName">displayName</a></code> | <code>string</code> | An arbitrary user-provided name for the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.region">region</a></code> | <code>string</code> | The region of the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.type">type</a></code> | <code>string</code> | The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationEndpoint`<sup>Required</sup> <a name="applicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.applicationEndpoint"></a>

```typescript
public readonly applicationEndpoint: BeyondcorpAppConnectionApplicationEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

application_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#application_endpoint BeyondcorpAppConnection#application_endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

ID of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#name BeyondcorpAppConnection#name}

---

##### `connectors`<sup>Optional</sup> <a name="connectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connectors"></a>

```typescript
public readonly connectors: string[];
```

- *Type:* string[]

List of AppConnectors that are authorised to be associated with this AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#connectors BeyondcorpAppConnection#connectors}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

An arbitrary user-provided name for the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#display_name BeyondcorpAppConnection#display_name}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.gateway"></a>

```typescript
public readonly gateway: BeyondcorpAppConnectionGateway;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#gateway BeyondcorpAppConnection#gateway}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#labels BeyondcorpAppConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#region BeyondcorpAppConnection#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BeyondcorpAppConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#timeouts BeyondcorpAppConnection#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}

---

### BeyondcorpAppConnectionGateway <a name="BeyondcorpAppConnectionGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.Initializer"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

const beyondcorpAppConnectionGateway: beyondcorpAppConnection.BeyondcorpAppConnectionGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.appGateway">appGateway</a></code> | <code>string</code> | AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.type">type</a></code> | <code>string</code> | The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values. |

---

##### `appGateway`<sup>Required</sup> <a name="appGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.appGateway"></a>

```typescript
public readonly appGateway: string;
```

- *Type:* string

AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#app_gateway BeyondcorpAppConnection#app_gateway}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}

---

### BeyondcorpAppConnectionTimeouts <a name="BeyondcorpAppConnectionTimeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.Initializer"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

const beyondcorpAppConnectionTimeouts: beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#create BeyondcorpAppConnection#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#delete BeyondcorpAppConnection#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#update BeyondcorpAppConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#create BeyondcorpAppConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#delete BeyondcorpAppConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/beyondcorp_app_connection#update BeyondcorpAppConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpAppConnectionApplicationEndpointOutputReference <a name="BeyondcorpAppConnectionApplicationEndpointOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

new beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BeyondcorpAppConnectionApplicationEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

---


### BeyondcorpAppConnectionGatewayOutputReference <a name="BeyondcorpAppConnectionGatewayOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

new beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.ingressPort">ingressPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGatewayInput">appGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGateway">appGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressPort`<sup>Required</sup> <a name="ingressPort" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.ingressPort"></a>

```typescript
public readonly ingressPort: number;
```

- *Type:* number

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `appGatewayInput`<sup>Optional</sup> <a name="appGatewayInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGatewayInput"></a>

```typescript
public readonly appGatewayInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `appGateway`<sup>Required</sup> <a name="appGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGateway"></a>

```typescript
public readonly appGateway: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BeyondcorpAppConnectionGateway;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

---


### BeyondcorpAppConnectionTimeoutsOutputReference <a name="BeyondcorpAppConnectionTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { beyondcorpAppConnection } from '@cdktf/provider-google'

new beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BeyondcorpAppConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>

---



