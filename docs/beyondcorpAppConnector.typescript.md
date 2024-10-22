# `beyondcorpAppConnector` Submodule <a name="`beyondcorpAppConnector` Submodule" id="@cdktf/provider-google.beyondcorpAppConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpAppConnector <a name="BeyondcorpAppConnector" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector google_beyondcorp_app_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

new beyondcorpAppConnector.BeyondcorpAppConnector(scope: Construct, id: string, config: BeyondcorpAppConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig">BeyondcorpAppConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig">BeyondcorpAppConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo">putPrincipalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrincipalInfo` <a name="putPrincipalInfo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo"></a>

```typescript
public putPrincipalInfo(value: BeyondcorpAppConnectorPrincipalInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: BeyondcorpAppConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpAppConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BeyondcorpAppConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BeyondcorpAppConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BeyondcorpAppConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpAppConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfo">principalInfo</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference">BeyondcorpAppConnectorPrincipalInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference">BeyondcorpAppConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfoInput">principalInfoInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `principalInfo`<sup>Required</sup> <a name="principalInfo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfo"></a>

```typescript
public readonly principalInfo: BeyondcorpAppConnectorPrincipalInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference">BeyondcorpAppConnectorPrincipalInfoOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeouts"></a>

```typescript
public readonly timeouts: BeyondcorpAppConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference">BeyondcorpAppConnectorTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `principalInfoInput`<sup>Optional</sup> <a name="principalInfoInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfoInput"></a>

```typescript
public readonly principalInfoInput: BeyondcorpAppConnectorPrincipalInfo;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BeyondcorpAppConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpAppConnectorConfig <a name="BeyondcorpAppConnectorConfig" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.Initializer"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

const beyondcorpAppConnectorConfig: beyondcorpAppConnector.BeyondcorpAppConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.name">name</a></code> | <code>string</code> | ID of the AppConnector. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.principalInfo">principalInfo</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | principal_info block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.displayName">displayName</a></code> | <code>string</code> | An arbitrary user-provided name for the AppConnector. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#id BeyondcorpAppConnector#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#project BeyondcorpAppConnector#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.region">region</a></code> | <code>string</code> | The region of the AppConnector. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

ID of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#name BeyondcorpAppConnector#name}

---

##### `principalInfo`<sup>Required</sup> <a name="principalInfo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.principalInfo"></a>

```typescript
public readonly principalInfo: BeyondcorpAppConnectorPrincipalInfo;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

principal_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#principal_info BeyondcorpAppConnector#principal_info}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

An arbitrary user-provided name for the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#display_name BeyondcorpAppConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#id BeyondcorpAppConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#labels BeyondcorpAppConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#project BeyondcorpAppConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#region BeyondcorpAppConnector#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BeyondcorpAppConnectorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#timeouts BeyondcorpAppConnector#timeouts}

---

### BeyondcorpAppConnectorPrincipalInfo <a name="BeyondcorpAppConnectorPrincipalInfo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.Initializer"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

const beyondcorpAppConnectorPrincipalInfo: beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | service_account block. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: BeyondcorpAppConnectorPrincipalInfoServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#service_account BeyondcorpAppConnector#service_account}

---

### BeyondcorpAppConnectorPrincipalInfoServiceAccount <a name="BeyondcorpAppConnectorPrincipalInfoServiceAccount" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.Initializer"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

const beyondcorpAppConnectorPrincipalInfoServiceAccount: beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.property.email">email</a></code> | <code>string</code> | Email address of the service account. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#email BeyondcorpAppConnector#email}

---

### BeyondcorpAppConnectorTimeouts <a name="BeyondcorpAppConnectorTimeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.Initializer"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

const beyondcorpAppConnectorTimeouts: beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#create BeyondcorpAppConnector#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#delete BeyondcorpAppConnector#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#update BeyondcorpAppConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#create BeyondcorpAppConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#delete BeyondcorpAppConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/beyondcorp_app_connector#update BeyondcorpAppConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpAppConnectorPrincipalInfoOutputReference <a name="BeyondcorpAppConnectorPrincipalInfoOutputReference" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

new beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount">putServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount"></a>

```typescript
public putServiceAccount(value: BeyondcorpAppConnectorPrincipalInfoServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference">BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference">BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: BeyondcorpAppConnectorPrincipalInfoServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BeyondcorpAppConnectorPrincipalInfo;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---


### BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference <a name="BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

new beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BeyondcorpAppConnectorPrincipalInfoServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---


### BeyondcorpAppConnectorTimeoutsOutputReference <a name="BeyondcorpAppConnectorTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { beyondcorpAppConnector } from '@cdktf/provider-google'

new beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BeyondcorpAppConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a>

---



